import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserProgressComponent } from './components/user-progress/user-progress.component';

const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'question', component: QuestionAnswerComponent },
    { path: 'history', component: UserHistoryComponent },
    { path: 'progress', component: UserProgressComponent },
    { path: '**', redirectTo: '/home' }
];

export default AppRoutes