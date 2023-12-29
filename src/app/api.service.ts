import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Session } from "./common/models/session";



@Injectable({
    providedIn: 'root'
})

export class QuestionService{
    model = 'Question';
    constructor(private http: HttpClient) {}
    getAllQuestions (){
        let SessionQuestion = this.http.get('http://localhost:3000/api/questions/pjgoodman/prev');
        console.log('SessionQuestion', SessionQuestion)
        return SessionQuestion
    }

    getAllTopics (){
        return this.http.get('http://localhost:3000/api/topic_options');
        
    }


}