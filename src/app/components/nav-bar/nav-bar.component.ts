import { User } from './../../common/models/user';
import { UserService } from './../../services/user/user.service';
import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  userSignal = computed(() => {
    return this.userService.user();
  });
  user: User = {} as User;

  constructor(private userService: UserService, private router: Router) {}

  // handleDropdown(user: any) {
  //   this.userService.login(user as User);

  // }

  handleSettings() {
    console.log('Settings has been clicked');
    this.router.navigate(['/topics']);
  }
}
