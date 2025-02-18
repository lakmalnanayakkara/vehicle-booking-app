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

@NgModule({
  declarations: [
    AppComponent,
    SignInScreenComponent,
    LoadingBoxComponent,
    MessageBoxComponent,
    RatingsComponent,
    HomeScreenComponent,
    SignUpScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
