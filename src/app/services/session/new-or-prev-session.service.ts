import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewOrPrevSessionService {

  public myState: any = 'new';
  public previousSessionId: string = '';

  getPreviousSessionId() {
    return this.previousSessionId
  }

  setPreviousSessionId(newPreviousSessionId: string) {
    this.previousSessionId = newPreviousSessionId
  }


}
