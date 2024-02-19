import { UserService } from './../../services/user/user.service';
import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../../common/models/user';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  user: User = {} as User;
  userSignal = computed(() => {
    return this.userService.user();

  });

  
  constructor(private userService: UserService, private router: Router) {}

  handleSettings() {
    console.log('Settings has been clicked');
    this.router.navigate(['/topics']);
  }
}
