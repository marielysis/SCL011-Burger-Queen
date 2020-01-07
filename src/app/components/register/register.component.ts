
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  public email: string = '';
  public password: string = '';


  ngOnInit() {
  }


  onUpload(e) {
     console.log('subir',e);
  }
  
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
         this.router.navigate(['home']);
      }).catch(err => console.log('err', err.message));
  };

  onLoginRedirect(): void {
    this.router.navigate(['admin/list-books']);
  }

}
