
import { ApiService } from '../../../services/api.service';
import { UserService } from './../../../services/user/user.service';
import { TopicSelection } from '../../../common/models/topic-selection';
import { Component, Input, computed } from '@angular/core';
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
  userSignal = computed(() => {
    return this.userService.user();
  });

  sessionHistory: Session[] = [] as Session[];

  constructor(
    private userService: UserService,
    private apiService: ApiService,
    private router: Router,
    private SessionService: SessionService,
  ) {
    this.apiService.getUserInfo().subscribe((data: any) => {});
  }

  ngOnInit(): void {
    this.apiService.getUserInfo().subscribe((data: any) => {
      this.user = data as User;
      this.sessionHistory = data.session_history as Session[];
      console.log('this.sessionHistory is', this.sessionHistory);
      console.log(this.userSignal());
    });
  }

  selectSession(session: Session) {
    console.log('in selectSession');
    console.log('session id', session.session_id);


    this.SessionService.session.set(session);
    this.SessionService.sessionType.set('old');
    this.router.navigate(['/question']);
  }
}
