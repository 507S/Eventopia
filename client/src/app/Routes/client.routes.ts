import { Routes } from '@angular/router';
import { HomeComponent } from '../client/component/home/home.component';
import { NotFoundComponent } from '../error/not-found/not-found.component';
import { WelcomeComponent } from '../welcome.component';
import { EventsComponent } from '../client/component/events/events.component';

export const clientRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
