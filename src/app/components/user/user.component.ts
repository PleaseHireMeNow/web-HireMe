import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserProgressComponent } from './user-progress/user-progress.component';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, UserHistoryComponent, UserProgressComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  currentState: any;

  constructor(
    private SessionService: SessionService,
    private router: Router
  ) {
    this.currentState = this.SessionService.sessionType();
  }

  public getPreviousSession = () => {
    this.SessionService.sessionType.set('current');
    console.log('current');
    this.currentState = this.SessionService.sessionType();
    this.router.navigate(['/question']);
  };
  public getNewSession = () => {
    this.SessionService.sessionType.set('new');
  };
}
