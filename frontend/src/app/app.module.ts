import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material-module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { LoadingBoxComponent } from './shared/loading-box/loading-box.component';
import { MessageBoxComponent } from './shared/message-box/message-box.component';
import { RatingsComponent } from './shared/ratings/ratings.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';
import { UserService } from './services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CarCardsComponent } from './cards/car-cards/car-cards.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTimepickerModule} from '@angular/material/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Add this for animations
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignInScreenComponent,
    LoadingBoxComponent,
    MessageBoxComponent,
    RatingsComponent,
    HomeScreenComponent,
    SignUpScreenComponent,
    CarCardsComponent,
    BookingComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatTimepickerModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      preventDuplicates: true,
      positionClass: 'toast-top-center',
      closeButton: true,
      progressBar: true,
      newestOnTop: true,
      tapToDismiss: true,
      progressAnimation: 'decreasing',
    }),
  
  ],
  providers: [
    UserService,
    provideNativeDateAdapter(),
    provideAnimationsAsync(),

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
