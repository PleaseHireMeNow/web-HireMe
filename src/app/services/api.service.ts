import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../common/models/session';
import { Answer } from '../common/models/session';
import { Question } from '../common/models/question';
import { Difficulty } from '../common/models/difficulty';
import { Topic } from '../common/models/topic';
import { User } from '../common/models/user';
import axios from 'axios';
import { SessionService } from './session/session.service';
import { TopicsService } from './topics/topics.service';
import { TopicSelection } from '../common/models/topic-selection';
import { TopicOptions } from '../common/models/topic-options';

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
    private SessionService: SessionService,
    private TopicsService: TopicsService
  ) {
    this.sessionId = this.SessionService.session().session_id;
  }
  getAllQuestions() {
    let sessionQuestion;
    let newSession = this.SessionService.sessionType();
    if (newSession === 'new') {
      sessionQuestion = axios.get(
        'http://localhost:3000/api/questions/current/new/pjgoodman/'
      );
    } else if (newSession === 'old') {
      sessionQuestion = axios.get(
        `http://localhost:3000/api/questions/previous/pjgoodman/${this.sessionId}`
      );
    } else {
      sessionQuestion = axios.get(
        'http://localhost:3000/api/questions/current/current/pjgoodman'
      );
    }
    console.log('sessionQuestion', sessionQuestion);
    return sessionQuestion;
  }

  getExistingPreviousSession(sessionId: string) {
    return axios.get(
      `http://localhost:3000/api/questions/previous/pjgoodman/${sessionId}`
    );
  }

  async getAllTopics() {
    const response = await axios.get('http://localhost:3000/api/topic_options/pjgoodman') as TopicOptions;
    this.TopicsService.topicOptions.set(response)
  }

  sendAnswer(question: Question, answer: Answer) {
    return axios.post(
      'http://localhost:3000/api/answer_history/pjgoodman',
      { question, answer },
      // { observe: 'response' }
    );
  }

  setTopic(topic: Topic, difficulty: Difficulty) {
    console.log('in setTopic');
    return axios.post<any>(
      'http://localhost:3000/api/topic_selection/pjgoodman',
      { topic, difficulty },
      // { observe: 'response' }
    );
  }
  getUserInfo() {
    return axios.get('http://localhost:3000/api/user/pjgoodman');
  }

  getNewSession() {
    
  }
}

// axios.get('your-backend-endpoint', { headers: headers }).subscribe(response => {
//     // Handle the response
//   });
