import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[
    CommonModule,
    // GoogleSigninButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  constructor( private loginService: LoginService ) {}

  ngOnInit(): void {
    this.loginService.logIn()
    
  }
}