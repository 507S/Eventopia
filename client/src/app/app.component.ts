import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

import { HomeComponent } from './client/component/home/home.component';
import { WelcomeComponent } from './welcome.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterOutlet,HomeComponent,WelcomeComponent,NotFoundComponent],
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'event';
}
