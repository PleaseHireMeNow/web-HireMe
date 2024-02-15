import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../../common/models/user';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule,
            LoginComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // SocialUser: SocialUser = {} as SocialUser;

  constructor(private router: Router) {
    // console.log('SocialUser data:', this.SocialUser);
  }

  handleSettings(){
    console.log('Settings has been clicked')
    this.router.navigate(['/topics'])

  }

}
