import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topics } from '../../common/models/topics';
import { Difficulty } from '../../common/models/difficulty';
import { QuestionService } from '../../api.service';
import { Question } from '../../common/models/question';

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss'
})
export class TopicsComponent {

  questions: Question[] = []; 
  topics: Topics[] = [];
  difficulty: Difficulty[] = [];

  constructor(private apiService: QuestionService) {}; 
  ngOnInit(): void {   
    this.apiService.getAllQuestions().subscribe((data: any) => {     
      this.questions = data;
      console.log('data:', data);
    });

    this.apiService.getAllTopics().subscribe((data: any) => {     
      this.topics = data.topics;
      this.difficulty = data.difficulty
      console.log('topics:', data.topics[0].name);
      console.log('topics1:',this.topics)
      console.log('difficulty:',this.difficulty)
    });

  }
}
