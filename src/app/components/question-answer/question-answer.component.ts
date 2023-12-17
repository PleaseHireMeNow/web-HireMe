import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../api.service';
import { Question } from '../../common/models/question';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss'
})
export class QuestionAnswerComponent {
  questions: Question[] = [];
  
  constructor(private apiService: QuestionService  ) {}

  ngOnInit(): void {
    this.apiService.getAllQuestions().subscribe((data: any) => {
      this.questions = data;
      console.log('data:', data);
      console.log('data[0]', data[0])
      console.log('data[0].questionID', data[0].question_id)
      console.log('data[0]', data[0].question_content.text)
      console.log('data[0]', data[0].question_content)
      console.log('data[0]', data[0].question_content.answers[0])
    });
  }

}
