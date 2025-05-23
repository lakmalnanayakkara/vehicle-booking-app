import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';
import { BookingComponent } from './booking/booking.component';
import { AddNewVehicleComponent } from './add-new-vehicle/add-new-vehicle.component';
import { CarListScreenComponent } from './car-list-screen/car-list-screen.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    data: { title: 'Best Vehicle Rental Place in Sri Lanka | Home' },
  },
  {
    path: 'sign-in',
    component: SignInScreenComponent,
    data: { title: 'Leader in MultiDay Tours | Sign In' },
  },
  {
    path: 'sign-up',
    component: SignUpScreenComponent,
    data: { title: 'Join With Us | Sign Up' },
  },
  {
    path: 'car-list',
    component: CarListScreenComponent,
  },
  {
    path: 'booking/:carId',
    component: BookingComponent,
  },
  {
    path: 'add-new-vehicle',
    component: AddNewVehicleComponent,
  },
  {
    path: 'search',
    component: FilterSearchComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
