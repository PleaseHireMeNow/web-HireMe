import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { Question } from '../../common/models/question';
import { Answer, Session } from '../../common/models/session';
import { Router } from '@angular/router';
import { NewOrPrevSessionService } from '../../services/sessions/new-or-prev-session.service';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss'
})
export class QuestionAnswerComponent {
  questions: Session = {} as Session;
  currentQuestionIndex: number = 0;
  correctAnswer: boolean|null = null;
  submit: boolean|null = null;
  currentState: any;
  clickedAnswer: any;

  constructor(private apiService: ApiService, private router: Router, private NewOrPrevSessionService: NewOrPrevSessionService  ) {
    this.currentState = this.NewOrPrevSessionService.getState();
  }

  ngOnInit(): void {
    this.apiService.getAllQuestions().subscribe((data: any) => {
      this.questions = data;
      this.currentQuestionIndex = this.questions.current_question
      console.log('Data:', data);
      console.log('this.currentState', this.currentState)
    });
  }

  handleAnswer(question: Question, answer: Answer){
    console.log('This answer has been selected', answer)
    if(answer.is_correct){
      console.log('You are correct')
      this.correctAnswer = true;
    }
    else{
      console.log('WRONG')
      this.correctAnswer = false;
    }
    this.clickedAnswer = answer
    this.apiService.sendAnswer(question,answer).subscribe( (res) => {
      console.log('post response', res)
    } ,(error) => {
      console.log('error', error)
    }) ;
  }

  nextQuestion(){
    if(this.currentQuestionIndex < this.questions.questions.length + 1 ){
      console.log('Index:', this.currentQuestionIndex)
      console.log('question.length', this.questions.questions.length)
      this.currentQuestionIndex++;
      this.correctAnswer = null;
      this.submit = null;
    }
  }

  handleSubmit(){
    if(this.correctAnswer === null){
      alert('Please select an answer before submitting.');
      return;
    }
    console.log('I clicked submit!', this.correctAnswer)
    this.submit = true;
  }

  navigateToUserPage() {
    this.router.navigate(['/user']);
  }

}
