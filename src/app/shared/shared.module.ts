import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CountriesModule } from '../countries/countries.module';
import { RouterOutlet, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CountriesModule,
    RouterModule,
    RouterOutlet
  ]
})
export class SharedModule { }
