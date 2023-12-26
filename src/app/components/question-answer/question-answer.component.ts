import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../api.service';
import { Question } from '../../common/models/question';
import { QuestionListComponent } from '../question-list/question-list.component';
import { AnswerListComponent } from '../answer-list/answer-list.component';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [CommonModule, QuestionListComponent, AnswerListComponent],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss'
})
export class QuestionAnswerComponent {
  questions: Question[] = [];
  currentQuestionIndex: number = 18;
  
  constructor(private apiService: QuestionService  ) {}

  ngOnInit(): void {
    this.apiService.getAllQuestions().subscribe((data: any) => {
      this.questions = data;
      console.log('Data:', data);
      console.log('this.questions', this.questions[0])
      console.log('Questions_id', this.questions[0].question_id)
      console.log('Questions 1', this.questions[0].question_content.text)
      console.log('Question 2:', this.questions[1].question_content.text)
      console.log('answer 1:', this.questions[0].question_content.answers[0].answer_content.text)
      console.log('answer 2:', this.questions[0].question_content.answers[1].answer_content.text)
    });
  }

  handleAnswer(answer: any){
    console.log('This answer has been slected', answer)
    if(answer.is_correct){
      console.log('You are correct')
    }
    else{
      console.log('WRONG')
    }
  }

  nextQuestion(){
    if(this.currentQuestionIndex < this.questions.length + 1 ){
      console.log('Index:', this.currentQuestionIndex)
      console.log('question.length', this.questions.length)
      this.currentQuestionIndex++;
    }
  }

}
