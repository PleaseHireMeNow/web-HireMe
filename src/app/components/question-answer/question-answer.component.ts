import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Question } from '../../common/models/question';
import { Answer, Session } from '../../common/models/session';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.scss',
})
export class QuestionAnswerComponent {
  questions: Session = {} as Session;
  currentQuestionIndex: number = 0;
  correctAnswer: boolean | null = null;
  submit: boolean | null = null;
  currentState: any;
  clickedAnswer: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private userService: UserService,
    private sessionService: SessionService
  ) {
    this.currentState = this.sessionService.sessionType();
  }

  async ngOnInit() {
    
      // Has session, is in the middle of it
      // Else needs a new session (no session | complete session)
      const session_history = this.userService.user().session_history

      if (session_history[0].current_question + 1 < session_history[0].questions.length) {
        // put the most recent session into the questions signal
        this.sessionService.session.set(session_history[0]);
      } else {
        await this.apiService.getNewSession()
      }
    }
  

  async handleAnswer(question: Question, answer: Answer) {
    console.log('This answer has been selected', answer);
    if (answer.is_correct) {
      console.log('You are correct');
      this.correctAnswer = true;
    } else {
      console.log('WRONG');
      this.correctAnswer = false;
    }
    this.clickedAnswer = answer;
    let res = await this.apiService.sendAnswer(question, answer)
        console.log('post response', res);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.questions.length + 1) {
      console.log('Index:', this.currentQuestionIndex);
      console.log('question.length', this.questions.questions.length);
      this.currentQuestionIndex++;
      this.correctAnswer = null;
      this.submit = null;
    }
  }

  handleSubmit() {
    if (this.correctAnswer === null) {
      alert('Please select an answer before submitting.');
      return;
    }
    console.log('I clicked submit!', this.correctAnswer);
    this.submit = true;
  }

  navigateToUserPage() {
    this.router.navigate(['/user']);
  }
}
