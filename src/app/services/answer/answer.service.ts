import { Injectable } from '@angular/core';
import { Question } from '../../common/models/question';
import { Answer } from '../../common/models/session';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    private apiService: ApiService
  ) { }
  
  sendAnswer(question: Question, answer: Answer) {
    // call api service
    this.apiService.sendAnswer(question, answer);

  }

}
