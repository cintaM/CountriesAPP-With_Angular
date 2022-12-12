import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';




@NgModule({
  declarations: [
    ForCapitalComponent,
    ForRegionComponent,
    SeeCountryComponent,
    ForCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  exports: [
    ForCapitalComponent,
    ForRegionComponent,
    SeeCountryComponent,
    ForCountryComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountriesModule { }
