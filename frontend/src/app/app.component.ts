import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'frontend';
  isSideNavOpen = false;
  isLoading = false;
  isError = false;
  variant = 'success';
  message = 'Not Found';
  isUserSignIn = false;

  sideNavOpen() {
    this.isSideNavOpen = !this.isSideNavOpen;
    console.log(this.isSideNavOpen);
  }
}
