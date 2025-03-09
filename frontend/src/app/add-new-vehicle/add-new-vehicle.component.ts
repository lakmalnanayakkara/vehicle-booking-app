import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {BreakpointObserver} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add-new-vehicle',
  standalone: false,
  templateUrl: './add-new-vehicle.component.html',
  styleUrl: './add-new-vehicle.component.css'
})
export class AddNewVehicleComponent {

  floatLabelControl: any;

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }
}
