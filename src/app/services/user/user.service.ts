import { User } from './../../common/models/user';
// import { User } from '../../common/models/user';
import { ApiService } from '../api.service';
import { Session } from './../../common/models/session';
import { Injectable, signal } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = signal({} as User);
  apiString = "http://localhost:3000";
  constructor() {
    
    }
  
  async login(user: User) {
    console.log("hello!")
    // login/register with the backend and get a user object back
    const res = await axios.post(`${this.apiString}/api/register/`, user)
    console.log(res.data);
    this.user.set(res.data);
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
  

