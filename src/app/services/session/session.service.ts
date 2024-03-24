import { Injectable } from '@angular/core';
import { Session } from '../../common/models/session';
import { signal } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  session = signal({} as Session);
  sessionType = signal('new' as 'new' | 'old');

  constructor(private apiService: ApiService) {}

  async getNewSession() {
    await this.apiService.getNewSession();
  }
}
