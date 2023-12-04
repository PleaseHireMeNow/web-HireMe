import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { OnInit } from '@angular/core'; // Flowbite
import { initFlowbite } from 'flowbite'; // Flowbite

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss',],
    imports: [CommonModule, RouterOutlet, NavBarComponent]
})
export class AppComponent implements OnInit {
  title = 'Web-HireMe';

  ngOnInit(): void {
    initFlowbite();
  }
}

