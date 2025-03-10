import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-filter-search',
  standalone: false,
  templateUrl: './filter-search.component.html',
  styleUrl: './filter-search.component.css'
})
export class FilterSearchComponent implements OnInit {
  
  fromLocation: string ='';
  availabelCars: any[] =[];
  locations: any[] = [];
  toLocation: string ='';


  constructor(private carSrv:CarService){}
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
floatLabelControl: any;


onLocationChange() {
  this.carSrv.GetAllCarsByLocation(this.fromLocation).subscribe((res:any)=>{
    this.availabelCars = res.data;
  })
}

}
