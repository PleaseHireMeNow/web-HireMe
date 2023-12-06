import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { OnInit } from '@angular/core'; // Flowbite
import { initFlowbite } from 'flowbite'; // Flowbite

import { QuestionService } from './api.service';
import { Question } from './common/models/question';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss',],
    imports: [CommonModule, RouterOutlet, NavBarComponent]
})
export class AppComponent implements OnInit {
  title = 'Web-HireMe';

  questions: Question[] = []; 
  constructor(private apiService: QuestionService) {}; 
  ngOnInit(): void {   
    initFlowbite();   
    this.apiService.getAllQuestions().subscribe((data: Question[]) => {     
      this.questions = data;
    });
}
}

