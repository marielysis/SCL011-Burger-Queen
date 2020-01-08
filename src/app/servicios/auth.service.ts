import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afsAuth: AngularFireAuth) { }

// registar nuevo usuario
registerUser(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then(userData =>  resolve(userData),
      err => reject(err));      
  });
}

// contraseña y email
loginEmailUser(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
      .then(userData => resolve(userData),
      err => reject(err));
  });
}

  // iniciar sesion con google
  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    
  }
//faceboock
  loginFacebookUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());

  }

// salir
  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }
}

