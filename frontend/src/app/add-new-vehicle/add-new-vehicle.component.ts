import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-add-new-vehicle',
  standalone: false,
  templateUrl: './add-new-vehicle.component.html',
  styleUrl: './add-new-vehicle.component.css',
})
export class AddNewVehicleComponent {
  floatLabelControl: any;

  vehicleDetailsForm = new FormGroup({
    brandName: new FormControl('', [Validators.required]),
    manufactureYear: new FormControl(undefined, [Validators.required]),
    transMissionType: new FormControl('', [Validators.required]),
    seatCount: new FormControl('', [Validators.required]),
    isAirConditioning: new FormControl(undefined, [Validators.required]),
    specification: new FormControl(''),
  });

  // vehicleDocumentsForm = new FormGroup({});

  stepperOrientation: Observable<StepperOrientation>;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  setYear(normalizedYear: Moment, datepicker: any) {
    const year = moment(normalizedYear).format('YYYY');
    this.vehicleDetailsForm.get('manufactureYear')?.setValue(year);
    datepicker.close();
  }

  onSubmit() {
    console.log('');
  }
}
