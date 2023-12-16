import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from '../topics/topics.component';
import { RouterModule, Router } from '@angular/router';
import  {AppRoutingModule}  from '../../app-routing.module'


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TopicsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) { }


  handleGetStarted (){
    console.log('I have been clicked')
    this.router.navigate(['/topics']);

  }
  

}
