import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-search',
  standalone: false,
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css',
})
export class FilterSearchComponent implements OnInit {
  fromLocation: string = '';
  availableCars: any[] = [];
  locations: any[] = [];
  toLocation: string = '';

  constructor(private carSrv: CarService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
    });
  }
  floatLabelControl: any;

  onLocationChange() {
    this.carSrv
      .GetAllCarsByLocation(this.fromLocation)
      .subscribe((res: any) => {
        this.availableCars = res.data;
      });
  }
}
