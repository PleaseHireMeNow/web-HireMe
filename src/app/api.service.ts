import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Session } from "./common/models/session";
import { Answer } from "./common/models/session";
import { Question } from "./common/models/question";



@Injectable({
    providedIn: 'root'
})

export class QuestionService{
    model = 'Question';
    constructor(private http: HttpClient) {}
    getAllQuestions (){
        let sessionQuestion 
        // if(newSession) {
            sessionQuestion = this.http.get('http://localhost:3000/api/questions/pjgoodman/new')
        // } else { 
        //     sessionQuestion = this.http.get('http://localhost:3000/api/questions/pjgoodman/prev')
        // };
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