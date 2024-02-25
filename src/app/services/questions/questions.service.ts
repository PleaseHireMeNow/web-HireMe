import { Injectable } from '@angular/core';
import { SessionQuestion } from '../../common/models/session';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions = signal([] as SessionQuestion[])
  constructor() { }



}


