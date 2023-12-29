import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Session } from "./common/models/session";
import { Answer } from "./common/models/session";
import { Question } from "./common/models/question";
import { NewOrPrevSessionService } from "./services/new-or-prev-session.service";



@Injectable({
    providedIn: 'root'
})

export class QuestionService{
    model = 'Question';
    currentState: any;
    constructor(private http: HttpClient, private NewOrPrevSessionService: NewOrPrevSessionService) {
        this.currentState = this.NewOrPrevSessionService.getState()}
    getAllQuestions (){
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

    getAllTopics (){
        return this.http.get('http://localhost:3000/api/topic_options/pjgoodman');
        
    }

    sendAnswer (question: Question, answer: Answer) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json')
        return this.http.post<any>('http://localhost:3000/api/answer_history/pjgoodman', {question, answer}, {observe: 'response'} );
    }

}