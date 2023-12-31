import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Session } from "./common/models/session";
import { Answer } from "./common/models/session";
import { Question } from "./common/models/question";
import { NewOrPrevSessionService } from "./services/sessions/new-or-prev-session.service";
import { Difficulty } from "./common/models/difficulty";
import { Topic } from "./common/models/topic";
import { User } from "./common/models/user";



@Injectable({
    providedIn: 'root'
})

export class ApiService{
    model = 'Question';
    currentState: any;
    constructor(private http: HttpClient, private NewOrPrevSessionService: NewOrPrevSessionService) {
        this.currentState = this.NewOrPrevSessionService.getState()}
    getAllQuestions(){
        let sessionQuestion 
        let newSession = this.currentState
        if(newSession === 'new') {
            sessionQuestion = this.http.get('http://localhost:3000/api/questions/pjgoodman/new')
        } else { 
            sessionQuestion = this.http.get('http://localhost:3000/api/questions/pjgoodman/prev')
        };
        console.log('sessionQuestion', sessionQuestion)
        return sessionQuestion
    }

    getAllTopics(){
        return this.http.get('http://localhost:3000/api/topic_options/pjgoodman');
    }

    sendAnswer(question: Question, answer: Answer) {
        return this.http.post<any>('http://localhost:3000/api/answer_history/pjgoodman', {question, answer}, {observe: 'response'} );
    }

    setTopic(topic: Topic, difficulty: Difficulty) {
        console.log('in setTopic')
        return this.http.post<any>('http://localhost:3000/api/topic_selection/pjgoodman', {topic, difficulty}, {observe: 'response'} );
    }
    getUserInfo(){
        const user = this.http.get('http://localhost:3000/api/user/pjgoodman')
        console.log('user', user)
        return user
    }
}