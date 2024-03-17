import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../common/models/session';
import { Answer } from '../common/models/session';
import { Question } from '../common/models/question';
import { NewOrPrevSessionService } from './session/new-or-prev-session.service';
import { Difficulty } from '../common/models/difficulty';
import { Topic } from '../common/models/topic';
import { User } from '../common/models/user';

// const headers = new HttpHeaders({
//     'Authorization': 'Bearer ' + YOUR_ID_TOKEN
//   });

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  model = 'Question';
  currentState: any;
  sessionId: any;
  constructor(
    private http: HttpClient,
    private NewOrPrevSessionService: NewOrPrevSessionService
  ) {
    this.currentState = this.NewOrPrevSessionService.getState();
    this.sessionId = this.NewOrPrevSessionService.getPreviousSessionId();
  }
  getAllQuestions() {
    let sessionQuestion;
    let newSession = this.currentState;
    if (newSession === 'new') {
      sessionQuestion = this.http.get(
        'http://localhost:3000/api/questions/current/new/pjgoodman/'
      );
    } else if (newSession === 'prev') {
      sessionQuestion = this.http.get(
        `http://localhost:3000/api/questions/previous/pjgoodman/${this.sessionId}`
      );
    } else {
      sessionQuestion = this.http.get(
        'http://localhost:3000/api/questions/current/current/pjgoodman'
      );
    }
    console.log('sessionQuestion', sessionQuestion);
    return sessionQuestion;
  }

  getExistingPreviousSession(sessionId: string) {
    return this.http.get(
      `http://localhost:3000/api/questions/previous/pjgoodman/${sessionId}`
    );
  }

  getAllTopics() {
    return this.http.get('http://localhost:3000/api/topic_options/pjgoodman');
  }

  sendAnswer(question: Question, answer: Answer) {
    return this.http.post<any>(
      'http://localhost:3000/api/answer_history/pjgoodman',
      { question, answer },
      { observe: 'response' }
    );
  }

  setTopic(topic: Topic, difficulty: Difficulty) {
    console.log('in setTopic');
    return this.http.post<any>(
      'http://localhost:3000/api/topic_selection/pjgoodman',
      { topic, difficulty },
      { observe: 'response' }
    );
  }
  getUserInfo() {
    return this.http.get('http://localhost:3000/api/user/pjgoodman');
  }

  getNewSession() {
    
  }
}

// this.http.get('your-backend-endpoint', { headers: headers }).subscribe(response => {
//     // Handle the response
//   });
