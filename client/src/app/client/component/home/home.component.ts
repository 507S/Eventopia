import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { CarouselComponent } from '../carousel/carousel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent {}
