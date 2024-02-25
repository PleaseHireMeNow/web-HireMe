import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Question } from '../../common/models/question';
import { Answer, Session } from '../../common/models/session';
import { Router } from '@angular/router';
import { NewOrPrevSessionService } from '../../services/session/new-or-prev-session.service';
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
    private NewOrPrevSessionService: NewOrPrevSessionService,
    private userService: UserService,
    private sessionService: SessionService
  ) {
    this.currentState = this.NewOrPrevSessionService.getState();
  }

  ngOnInit(): void {
    
      if (this.userService.user().session_history.length === 0) {
        // this.somethingservice.getnewsession();
      }
      // look at the most recent session
      const mostRecentSession = this.userService.user().session_history[0];
      // if it's already done, get a new one
      if (
        mostRecentSession.current_question + 1 ===
        mostRecentSession.questions.length
      ) {
        // this.somethingservice.getnewsession();
      } else {
        this.sessionService.session.set(mostRecentSession);
        // put the most recent session into the questions signal
      }
    }
    // this.apiService.getAllQuestions().subscribe((data: any) => {
    //   this.questions = data;
    //   this.currentQuestionIndex = this.questions.current_question
    //   console.log('Data:', data);
    //   console.log('this.currentState', this.currentState)
    // });
  

  handleAnswer(question: Question, answer: Answer) {
    console.log('This answer has been selected', answer);
    if (answer.is_correct) {
      console.log('You are correct');
      this.correctAnswer = true;
    } else {
      console.log('WRONG');
      this.correctAnswer = false;
    }
    this.clickedAnswer = answer;
    this.apiService.sendAnswer(question, answer).subscribe(
      (res) => {
        console.log('post response', res);
      },
      (error) => {
        console.log('error', error);
      }
    );
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
