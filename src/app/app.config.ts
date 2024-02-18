import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import AppRoutes from './app.routes';
import { provideHttpClient } from '@angular/common/http';
// import { provideOAuthClient } from 'angular-oauth2-oidc';
// import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
// import {
//   GoogleLoginProvider,
// } from '@abacritt/angularx-social-login';

// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

export const appConfig: ApplicationConfig = {
  //   providers: [new GoogleAuthProvider()]
  providers: [
    provideRouter(AppRoutes),
    provideHttpClient(),

    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           '813743952544-uocklnuk6e8jqvkcuc3talu1mple2elc.apps.googleusercontent.com'
    //         )
    //       }
    //     ],
    //     onError: (error) => {
    //       console.error(error);
    //     }
    //   } as SocialAuthServiceConfig, }
  ],
};

// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { initializeApp } from 'firebase/app';

// Initialize Firebase app with your Firebase project configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCjMQrGb6Z_0tzR-MQ1oTpiAJmAoyYEz6s',
//   authDomain: 'hiremenow-c8546.firebaseapp.com',
//   projectId: 'hiremenow-c8546',
//   storageBucket: 'hiremenow-c8546.appspot.com',
//   messagingSenderId: '813743952544',
//   appId: '1:813743952544:web:f9575157d7d1c0f55b6fc5',
//   measurementId: 'G-55T4CD3TK2',
// };

// const app = initializeApp(firebaseConfig);

// Create an instance of the Google provider
// const provider = new GoogleAuthProvider();

// Get the Auth object
// const auth = getAuth();

// Handle sign-in with a pop-up window
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access Google APIs.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     console.log('credential', credential)
//     const token = credential?.accessToken;

//     // The signed-in user info.
//     const user = result.user;

//     // Additional actions after successful sign-in
//     console.log('User signed in:', user);
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     console.error('Sign-in error:', errorMessage);
//   });
