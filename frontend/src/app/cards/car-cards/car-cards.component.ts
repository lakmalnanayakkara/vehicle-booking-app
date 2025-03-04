import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-cards',
  standalone: false,
  templateUrl: './car-cards.component.html',
  styleUrl: './car-cards.component.css'
})
export class CarCardsComponent {
  @Input() carData: any;
}
