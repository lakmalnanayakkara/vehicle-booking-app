import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleSaveDetails } from '../interface/vehicle-interface';
import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  saveVehicle(formData: FormData): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/api/v1/vehicle/save-vehicle`,
      formData,
      {
        headers: { enctype: 'multipart/form-data' }, // Ensure correct content type
      }
    );
  }
}
