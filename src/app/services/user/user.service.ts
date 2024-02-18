import { User } from './../../common/models/user';
// import { User } from '../../common/models/user';
import { ApiService } from './../../api.service';
import { Session } from './../../common/models/session';
import { Injectable, signal } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
   user = signal({} as User);

  constructor() {
    
    }
  
  public login(user: User): void {
    this.user.set(user);
    console.log(this.user())
  }

  // getUser(): any {
  //   return this.user;
  // }

  // setUser(newState: any): void {
  //   console.log('setUser')
  //   this.user = newState;
  // }

  // getSessions()  {
  //   const sessions = this.user.session_history as Session[] 
  //   return this.user

  // }

}
  

