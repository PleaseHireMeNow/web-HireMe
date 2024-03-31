import { UserService } from './../../../services/user/user.service';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session } from '../../../common/models/session';
import { User } from '../../../common/models/user';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session/session.service';

@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-history.component.html',
  styleUrl: './user-history.component.scss',
})
export class UserHistoryComponent {
  @Input() selectedTopic?: string;
  user: User = {} as User;

  constructor(
    private userService: UserService,
    private router: Router,
    private SessionService: SessionService,
  ) {
    this.user = this.userService.user();
  }

  selectSession(session: Session) {
    console.log('in selectSession');
    console.log('session id', session.session_id);


    this.SessionService.session.set(session);
    this.SessionService.sessionType.set('old');
    this.router.navigate(['/question']);
  }
}
