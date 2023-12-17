import { Difficulty } from './../../common/models/difficulty';
import { SelectedTopic } from './../../common/models/selected-topic';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topics } from '../../common/models/topics';
import { QuestionService } from '../../api.service';
import { Question } from '../../common/models/question';

const emptyTopic: Topics = {
  name: '',
  iconPath: '',
};

const emptyDifficulty: Difficulty = {
  name: '',
  iconPath: '',
};

@Component({
  selector: 'app-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
})
export class TopicsComponent {
  questions: Question[] = [];
  topics: Topics[] = [];
  difficulty: Difficulty[] = [];
  selectedTopic = emptyTopic;
  selectedDifficulty = emptyDifficulty;

  constructor(private apiService: QuestionService) {}
  ngOnInit(): void {
    this.apiService.getAllQuestions().subscribe((data: any) => {
      this.questions = data;
      console.log('data:', data);
    });

    this.apiService.getAllTopics().subscribe((data: any) => {
      this.topics = data.topics;
      this.difficulty = data.difficulty;
      console.log('topics:', data.topics[0].name);
      console.log('topics1:', this.topics);
      console.log('difficulty:', this.difficulty);
    });
  }

  selectTopic(topic: any) {
    console.log('In the selectTopic');
    this.selectedTopic = topic;
    console.log('the selected topic:', this.selectedTopic);
  }

  selectDifficulty(level: any) {
    console.log('In the diffectly');
    this.selectedDifficulty = level;
    console.log('Selected Difficulty', this.selectedDifficulty);
  }

  handleSubmit() {
    console.log(
      'I Have been clicked!',
      this.selectedTopic.name,
      this.selectedDifficulty.name
    );
    if (this.selectedTopic.name !== '' && this.selectedDifficulty.name !== '') {
      console.log(' I CAN MOVE ON');
      let send = {};
      const sendTo = [
        (send = {
          topic: this.selectedTopic,
          difficulty: this.selectedDifficulty,
        }),
      ];
      console.log('send this,', sendTo)
    } else {
      console.log('WRONGGGGGGG CAN"T MOVE ON');
      alert('Please pick a topic or difficulty');
    }
  }
}
