import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { NgForm } from '@angular/forms/';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';  
  public isError = false;
  ngOnInit() {
  }

//  metodo iniciar sesion 
  onLogin(form: NgForm ) {
    if (form.valid) {
  
   return this.authService.loginEmailUser(this.email, this.password)
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

  // metodo cerrar sesion
  onLogout() {
    this.authService.logoutUser();
  }
  //metodo Redirigir  al iniciar sesion 
  onLoginRedirect(): void {
    this.router.navigate(['profile']);
  }

  onIsError() : void{
    this.isError= true;
    setTimeout(() => {
      this.isError= false;
    }, 3000);
  }

}

