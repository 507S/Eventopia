import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, SearchComponent, CarouselComponent],
  templateUrl: './events.component.html'
})
export class EventsComponent {}
