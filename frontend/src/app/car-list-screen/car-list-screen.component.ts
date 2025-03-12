import { Component, type OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-list-screen',
  standalone: false,
  templateUrl: './car-list-screen.component.html',
  styleUrl: './car-list-screen.component.css',
})
export class CarListScreenComponent implements OnInit {
  locations = ['location1', 'location2'];
  readonly startDate = new Date();

  basicDetailsForm = new FormGroup({
    startLocation: new FormControl(''),
    dropOffLocation: new FormControl(''),
    startDate: new FormControl(new Date()),
    startTime: new FormControl(new Date()),
    endDate: new FormControl(new Date()),
    endTime: new FormControl(new Date()),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.basicDetailsForm.controls.startLocation.setValue(params.start);
      this.basicDetailsForm.controls.dropOffLocation.setValue(params.end);
      this.basicDetailsForm.controls.startDate.setValue(
        new Date(params.startDate)
      );
      this.basicDetailsForm.controls.startTime.setValue(
        new Date(params.startTime)
      );
      this.basicDetailsForm.controls.endDate.setValue(new Date(params.endDate));
      this.basicDetailsForm.controls.endTime.setValue(new Date(params.endTime));
    });
  }
}
