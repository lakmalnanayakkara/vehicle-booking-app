import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-cards',
  standalone: false,
  templateUrl: './car-cards.component.html',
  styleUrl: './car-cards.component.css'
})
export class CarCardsComponent {
  @Input() carData: any;

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/details']);  // Navigates to the details page
  }

}
