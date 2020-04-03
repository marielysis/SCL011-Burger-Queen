
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { UserInterface } from 'src/app/models/user';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',  
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private storage: AngularFireStorage) { }
  private user: UserInterface = {
    email: '',
    password: ''
  };
 
public isError = false; 
// public msgError = '';

 uploadPercent: Observable<number>;
  urlImage: Observable<string>;   

  ngOnInit() {
  }

// al subir fichero
  onUpload(e) {
    //  console.log('subir',e);
     const id = Math.random().toString(36).substring(2);// genero id unico para el nombre de la imagen a subir 
     const file = e.target.files[0];// aqui traigo solo el primer archivo 
     const filePath = `uploads/profile_${id}`;
     const ref = this.storage.ref(filePath);
     const task = this.storage.upload(filePath, file);
     this.uploadPercent = task.percentageChanges();
     task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  // agregar usuario 
  onAddUser(form : NgForm ) {
    if (form.valid) {
    this.authService.registerUser(this.user.email, this.user.password)
      .then((res) => {
         this.onLoginRedirect();
         this.isError= false;
        }).catch(err => this.onIsError());
      }else{
      this.onIsError();
      }
    }

  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
     .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  //metodo Redirigir  al iniciar sesion 
  onLoginRedirect(): void {
    this.router.navigate(['profile']);
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }
}






 


