import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { SignInScreenComponent } from './sign-in-screen/sign-in-screen.component';
import { SignUpScreenComponent } from './sign-up-screen/sign-up-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
    data: { title: 'Best Travel Agent in Sri Lanka | Home' },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
