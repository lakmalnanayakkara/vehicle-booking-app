import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
  },
  {
    path: 'sign-in',
    component: SignInScreenComponent,
  },
  {
    path: 'sign-up',
    component: SignUpScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
