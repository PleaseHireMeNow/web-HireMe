import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})

export class QuestionService{
    model = 'Question';
    constructor(private http: HttpClient) {}
    getAllQuestions (){
        return this.http.get('http://localhost:3000/api/questions/string1');
    }

    getAllTopics (){
        return this.http.get('http://localhost:3000/api/stackOptions');
    }


}