import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchComponent } from '../search/search.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { EventService } from '../../../service/event.service';
import { IEvent } from '../../../models/clientInterface';

@Component({
  selector: 'app-event-details',
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
  templateUrl: './event-details.component.html',
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | undefined;

  router = inject(Router);
  route = inject(ActivatedRoute);
  eventService = inject(EventService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.eventService.getEventByID(id).subscribe((res) => {
        this.event = res.data;
      });
    }
  }
}
