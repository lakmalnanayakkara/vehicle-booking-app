import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 
  startTime:any;
  endTime:any;
  popularCars: any [] = [];
  locations: any [] = [];
  fromLocation: string ='';
  toLocation: string ='';
startTimepicker: any;
endTimepicker: any;
startDate: any;
endDate: any;
  constructor(private carSrv: CarService,private router: Router){

  }
  ngOnInit(): void {
    this.getAllCars();
    this.getAllLocations();
  }

  getAllCars() {
    this.carSrv.GetAllCars().subscribe((res:any)=>{
      this.popularCars = res.data;
    })
  }
  getAllLocations() {
    this.carSrv.GetAllLocations().subscribe((res:any)=>{
      this.locations = res.data;
    })
  }
  navigateToSearchPage() {
    this.router.navigate(['/search',this.fromLocation]) 
  }

}
