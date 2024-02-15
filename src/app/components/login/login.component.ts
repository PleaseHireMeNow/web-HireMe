import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[
    CommonModule,
    GoogleSigninButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor( private authService:SocialAuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((socialUser) => {
      console.log(socialUser)
      console.log(socialUser.firstName)
    });
  }
}