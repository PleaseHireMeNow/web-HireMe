import { Difficulty } from './../../common/models/difficulty';
import { TopicSelection } from '../../common/models/topic-selection';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Topic } from '../../common/models/topic';
import { ApiService } from '../../services/api.service';
// import { Question } from '../../common/models/question';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { TopicsService } from '../../services/topics/topics.service';

const emptyTopic: Topic = {
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
  topicOptions: Topic[] = this.TopicsService.topicOptions().topics;
  difficultyOptions: Difficulty[] = this.TopicsService.topicOptions().difficulties;
  selectedTopic = emptyTopic;
  selectedDifficulty = emptyDifficulty;

  constructor(
    private apiService: ApiService, 
    private router: Router, 
    private userService: UserService, 
    private TopicsService: TopicsService
    ) {}

  async ngOnInit() {    
    console.log(this.userService.user().topic_selection);
    // Check if user has already selected topics
    if (this.userService.user().topic_selection !== undefined) {
      this.router.navigate(['/user'])
    }

    // Get topics for user to select from
    this.TopicsService.getAllTopics()
  }

  selectTopic(topic: any) {
    console.log('In the selectTopic');
    this.selectedTopic = topic;
    console.log('the selected topic:', this.selectedTopic);
  }

  selectDifficulty(level: any) {
    console.log('In the difficulty');
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
      this.apiService.setTopic(this.selectedTopic, this.selectedDifficulty)
      this.router.navigate(['/question'])

    } else {
      console.log('WRONGGGGGGG CAN"T MOVE ON');
      alert('Please pick a topic or difficulty');
    }

  }
}
