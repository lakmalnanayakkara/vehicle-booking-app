import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import moment from 'moment';
import { Moment } from 'moment';
import { VehicleService } from '../services/vehicle.service';
import { VehicleSaveDetails } from '../interface/vehicle-interface';
import { TransitionType, DocumentType } from '../interface/enums/common.enum';

@Component({
  selector: 'app-add-new-vehicle',
  standalone: false,
  templateUrl: './add-new-vehicle.component.html',
  styleUrl: './add-new-vehicle.component.css',
})
export class AddNewVehicleComponent {
  floatLabelControl: any;

  vehicleDocsImages: { file: File; type: DocumentType }[] = [];
  DocumentType = DocumentType;

  types: { value: TransitionType; viewValue: string }[] = [
    { value: TransitionType.AUTO, viewValue: 'AUTO' },
    { value: TransitionType.MANUAL, viewValue: 'MANUAL' },
  ];

  vehicleDetailsForm = new FormGroup({
    brandName: new FormControl('', [Validators.required]),
    manufactureYear: new FormControl(undefined, [Validators.required]),
    transMissionType: new FormControl(undefined, [Validators.required]),
    seatCount: new FormControl(undefined, [Validators.required]),
    isAirConditioning: new FormControl(undefined, [Validators.required]),
    specification: new FormControl(''),
  });

  // vehicleDocumentsForm = new FormGroup({});

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private vehicleService: VehicleService) {
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

  handleDocumentUpload(file: File, type: DocumentType) {
    this.vehicleDocsImages.push({ file, type });
  }

  handleDocumentRemove(file: File, type: DocumentType) {
    this.vehicleDocsImages.forEach((doc, index) => {
      if (doc.type === type) {
        this.vehicleDocsImages.splice(index, 1);
      }
    });
  }

  onSubmit() {
    const formData = new FormData();

    formData.append('username', 'user');
    formData.append(
      'vehicle_manufacturer_year',
      this.vehicleDetailsForm.controls.manufactureYear.value
    );
    formData.append('brand', this.vehicleDetailsForm.controls.brandName.value);
    formData.append(
      'transitionType',
      this.vehicleDetailsForm.controls.transMissionType.value
    );
    formData.append(
      'isAirConditioning',
      this.vehicleDetailsForm.controls.isAirConditioning.value
    );
    formData.append(
      'seat_count',
      this.vehicleDetailsForm.controls.seatCount.value.toString()
    );
    formData.append(
      'specification',
      this.vehicleDetailsForm.controls.specification.value
    );

    formData.append(
      this.vehicleDocsImages[1].type,
      this.vehicleDocsImages[1].file
    );
    formData.append(
      this.vehicleDocsImages[2].type,
      this.vehicleDocsImages[2].file
    );
    formData.append(
      this.vehicleDocsImages[3].type,
      this.vehicleDocsImages[3].file
    );
    formData.append(
      this.vehicleDocsImages[4].type,
      this.vehicleDocsImages[4].file
    );
    formData.append(
      this.vehicleDocsImages[5].type,
      this.vehicleDocsImages[5].file
    );
    formData.append(
      this.vehicleDocsImages[0].type,
      this.vehicleDocsImages[0].file
    );

    const sub = this.vehicleService.saveVehicle(formData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
