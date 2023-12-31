import { ApiService } from './../../../api.service';
import { UserService } from './../../../services/user/user.service';
import { TopicSelection } from '../../../common/models/topic-selection';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session } from '../../../common/models/session';
import { User } from '../../../common/models/user';

@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-history.component.html',
  styleUrl: './user-history.component.scss'
})
export class UserHistoryComponent {
  @Input() selectedTopic?: string;
  user: User = {} as User;
  sessionHistory: Session[] = [] as Session[];

  constructor(private apiService: ApiService) {
    this.apiService.getUserInfo().subscribe((data: any) => {
  
    })
  }

ngOnInit(): void {
    this.apiService.getUserInfo().subscribe((data: any) => {
      this.user = data as User;
      this.sessionHistory = data.session_history as Session[]
      console.log(this.sessionHistory)
    })
}


}
