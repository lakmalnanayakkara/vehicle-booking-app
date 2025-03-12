import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  standalone: false,
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css',
})
export class HomeScreenComponent {
  locations = ['location1', 'location2'];
  readonly startDate = new Date();

  constructor(private router: Router) {}

  findCarsForm = new FormGroup({
    startLocation: new FormControl('', [Validators.required]),
    dropOffLocation: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    returnSameLoc: new FormControl(''),
  });

  onSubmit() {
    this.router.navigate(['/car-list'], {
      queryParams: {
        start: this.findCarsForm.controls.startLocation.value,
        end: this.findCarsForm.controls.dropOffLocation.value,
        startDate: this.findCarsForm.controls.startDate.value,
        startTime: this.findCarsForm.controls.startTime.value,
        endDate: this.findCarsForm.controls.endDate.value,
        endTime: this.findCarsForm.controls.endTime.value,
        returnSameLoc: this.findCarsForm.controls.returnSameLoc.value,
      },
    });
  }
}
