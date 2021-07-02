import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ProyetsComponent } from './pages/proyets/proyets.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    ProyetsComponent,
    AboutmeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
