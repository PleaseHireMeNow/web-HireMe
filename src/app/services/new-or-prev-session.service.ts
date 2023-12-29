import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewOrPrevSessionService {

  private myState: any;

  getState(): any {
    return this.myState;
  }

  setState(newState: any): void {
    this.myState = newState;
  }

}
