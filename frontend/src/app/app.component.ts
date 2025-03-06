import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isSideNavOpen = false;
  isLoading = false;
  isError = false;
  variant = 'success';
  message = 'Not Found';

  constructor(private titleService: Title, private router: Router) {
    this.setDynamicTitle();
  }

  setDynamicTitle(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root;
        this.setTitleFromRoute(currentRoute);
      });
  }

  setTitleFromRoute(route: any): void {
    while (route.firstChild) {
      route = route.firstChild;
    }

    if (route.snapshot.data && route.snapshot.data['title']) {
      this.titleService.setTitle(route.snapshot.data['title']);
    }
  }

  sideNavOpen() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
