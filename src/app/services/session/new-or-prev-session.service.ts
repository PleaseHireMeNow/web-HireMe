import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewOrPrevSessionService {

  public myState: any = 'new';
  public previousSessionId: string = '';

  setState(newState: any): void {
    console.log('setState')
    this.myState = newState;
  }

  getPreviousSessionId() {
    return this.previousSessionId
  }

  setPreviousSessionId(newPreviousSessionId: string) {
    this.previousSessionId = newPreviousSessionId
  }


}
