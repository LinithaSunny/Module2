import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmovieComponent } from './components/bookmovie/bookmovie.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UpcomingmoviesComponent } from './components/upcomingmovies/upcomingmovies.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'bookmovie',component:BookmovieComponent},
  {path:'upcomingmovies',component:UpcomingmoviesComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
