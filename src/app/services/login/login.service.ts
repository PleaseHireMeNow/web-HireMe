import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../../common/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private userService: UserService) {

  }
  // Initialize Firebase app with your Firebase project configuration
  firebaseConfig = {
    apiKey: 'AIzaSyCjMQrGb6Z_0tzR-MQ1oTpiAJmAoyYEz6s',
    authDomain: 'hiremenow-c8546.firebaseapp.com',
    projectId: 'hiremenow-c8546',
    storageBucket: 'hiremenow-c8546.appspot.com',
    messagingSenderId: '813743952544',
    appId: '1:813743952544:web:f9575157d7d1c0f55b6fc5',
    measurementId: 'G-55T4CD3TK2',
  };

  app = initializeApp(this.firebaseConfig);

  // Create an instance of the Google provider
  provider = new GoogleAuthProvider();

  // Get the Auth object
  auth = getAuth();

  // Handle sign-in with a pop-up window
  logIn() {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log('credential', credential);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(Object.keys(user));
        this.userService.login(user as User);

        // Additional actions after successful sign-in
        console.log('User signed in:', user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.error('Sign-in error:', errorMessage);
      });
  }
}
