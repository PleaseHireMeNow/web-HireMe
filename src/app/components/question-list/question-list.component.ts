import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../common/models/question';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent {

  @Input() questions: Question[] = [];

}
