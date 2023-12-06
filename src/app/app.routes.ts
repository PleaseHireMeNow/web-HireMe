import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { UserHistoryComponent } from './components/user/user-history/user-history.component';
import { UserProgressComponent } from './components/user/user-progress/user-progress.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';

import { QuestionService } from './api.service';

const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent,
       
    },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'question', component: QuestionAnswerComponent },
    { path: 'history', component: UserHistoryComponent },
    { path: 'progress', component: UserProgressComponent },
    { path: 'user', component: UserComponent },
    { path: '**', redirectTo: '/home' }
];

// COMMENT: history and progress may need fixing => dashboard or /user should contain history and progress

export default AppRoutes
