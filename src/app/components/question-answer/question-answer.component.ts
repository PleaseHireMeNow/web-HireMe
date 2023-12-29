import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../api.service';
import { Question } from '../../common/models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss'
})
export class QuestionAnswerComponent {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  correctAnswer: boolean|null = null;
  
  constructor(private apiService: QuestionService, private router: Router  ) {}

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
    console.log('This answer has been selected', answer)
    if(answer.is_correct){
      console.log('You are correct')
      this.correctAnswer = true;
    }
    else{
      console.log('WRONG')
      this.correctAnswer = false;
    }
  }

  nextQuestion(){
    if(this.currentQuestionIndex < this.questions.length + 1 ){
      console.log('Index:', this.currentQuestionIndex)
      console.log('question.length', this.questions.length)
      this.currentQuestionIndex++;
      this.correctAnswer = null;
    }
  }

}
