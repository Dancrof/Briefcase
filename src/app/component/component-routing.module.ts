import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyetsComponent } from './pages/proyets/proyets.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'home', component: HomeComponent},
      {path: 'About', component: AboutmeComponent},
      {path: 'proyects', component: ProyetsComponent},
      {path: '**', redirectTo: '/home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
