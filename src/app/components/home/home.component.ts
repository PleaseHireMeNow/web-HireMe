import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from '../topics/topics.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopicsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
