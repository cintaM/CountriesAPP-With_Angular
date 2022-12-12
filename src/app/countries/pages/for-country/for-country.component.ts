import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styleUrls: ['./for-country.component.css']
})
export class ForCountryComponent {

  termino:string = '';
  errorExist: boolean = false;
  countries: Country[] = [];
  sugestCountries: Country[] = [];
  showSugest: boolean = true;

  constructor( private countryService: CountryService){}

  buscar( termino: string){
    this.showSugest = false;
    this.errorExist = false;
    this.termino = termino;
    this.countryService.searchCountry(this.termino)
    .subscribe( (countries) => {
      this.countries = countries;
    }, (err) => {
        this.errorExist = true;
        this.countries = [];
      
    });
  }

  sugest(termino: string){
    this.errorExist = false;
    this.termino = termino;

    this.countryService.searchCountry(termino)
    .subscribe(countries => this.sugestCountries = countries.splice(0,5),
    (err) => this.sugestCountries= [] )
    
  }

  findSugest(termino: string){
    this.buscar(termino);

  }


}
