import { Injectable } from '@angular/core';
import { Session } from '../../common/models/session';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  session = signal({} as Session)
  constructor() { }



}


