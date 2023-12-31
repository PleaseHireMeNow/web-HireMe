import { ApiService } from './../../../api.service';
import { UserService } from './../../../services/user/user.service';
import { TopicSelection } from '../../../common/models/topic-selection';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session } from '../../../common/models/session';

@Component({
  selector: 'app-user-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-history.component.html',
  styleUrl: './user-history.component.scss'
})
export class UserHistoryComponent {
  @Input() selectedTopic?: string;

  sessionHistory: any;

  // constructor(private UserService: UserService){
  //   this.sessionHistory = this.UserService.getSessions()
  
  // }

  constructor(private apiService: ApiService) {
    this.apiService.getUserInfo().subscribe((data: any) => {
      this.sessionHistory = data.session_history;
    })
  }

ngOnInit(): void {
  this.getSessionHistory()
}
public getSessionHistory = () => {
  console.log('this.sessionHistory', this.sessionHistory)
}

}
