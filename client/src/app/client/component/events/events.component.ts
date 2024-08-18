import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { IEvent } from '../../../models/clientInterface';
import { EventService } from '../../../service/event.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    CarouselComponent,
  ],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  router = inject(Router);
  eventList: IEvent[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.getEventFromServer();
  }

  getEventFromServer() {
    this.eventService.getAllEvent().subscribe((res) => {
      this.eventList = res.data || [];
      console.log(res);
    });
  }

  edit(id?: number) {
    console.log(id);
    this.router.navigateByUrl('/events/' + id);
  }

  
}
