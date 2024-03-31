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
import { UserService } from './user/user.service';

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
  userId: any;
  constructor(
    private SessionService: SessionService,
    private TopicsService: TopicsService,
    private UserService: UserService
  ) {
    this.sessionId = this.SessionService.session().session_id;
    this.userId = this.UserService.user().user_id;
  }

  serverAddress = 'http://localhost:3000'

  async getAllQuestions() {
    let sessionQuestion;
    let newSession = this.SessionService.sessionType();
    if (newSession === 'new') {
      sessionQuestion = await axios.get(
        `${this.serverAddress}/api/questions/current/new/${this.userId}/`
      );
    } else if (newSession === 'old') {
      sessionQuestion = await axios.get(
        `${this.serverAddress}/api/questions/previous/${this.userId}/${this.sessionId}`
      );
    } else {
      sessionQuestion = await axios.get(
        `${this.serverAddress}/api/questions/current/current/${this.userId}`
      );
    }
    console.log('sessionQuestion', sessionQuestion);
    return sessionQuestion;
  }

  getExistingPreviousSession(sessionId: string) {
    return axios.get(
      `${this.serverAddress}/api/questions/previous/${this.userId}/${sessionId}`
    );
  }

  async getAllTopics() {
    const response: TopicOptions = await axios.get(`${this.serverAddress}/api/topic_options/${this.userId}`);
    this.TopicsService.topicOptions.set(response)
  }

  sendAnswer(question: Question, answer: Answer) {
    return axios.post(
      `${this.serverAddress}/api/answer_history/${this.userId}`,
      { question, answer },
      // { observe: 'response' }
    );
  }

  setTopic(topic: Topic, difficulty: Difficulty) {
    console.log('in setTopic');
    return axios.post<any>(
      `${this.serverAddress}/api/topic_selection/${this.userId}`,
      { topic, difficulty },
      // { observe: 'response' }
    );
  }
  getUserInfo() {
    return axios.get(`${this.serverAddress}/api/user/${this.userId}`);
  }

  async getNewSession() {
    const response: Session = await axios.get(`${this.serverAddress}/api/questions/current/new/${this.userId}/`)
    this.SessionService.session.set(response)
  }
}

// axios.get('your-backend-endpoint', { headers: headers }).subscribe(response => {
//     // Handle the response
//   });
