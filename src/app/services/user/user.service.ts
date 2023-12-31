import { User } from './../../common/models/user';
// import { User } from '../../common/models/user';
import { ApiService } from './../../api.service';
import { Session } from './../../common/models/session';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User = {} as User;

  constructor(private apiService: ApiService) {
    this.apiService.getUserInfo().subscribe((data: any) => {
      this.user = data;
    })
  }

  getUser(): any {
    return this.user;
  }

  setUser(newState: any): void {
    console.log('setUser')
    this.user = newState;
  }

  getSessions()  {
    const sessions = this.user.session_history as Session[] 
    return this.user

  }

}
  

