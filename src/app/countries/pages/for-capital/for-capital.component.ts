import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CapitalService } from '../../services/capital.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styleUrls: ['./for-capital.component.css']
})
export class ForCapitalComponent {

  termino:string = '';
  errorExist: boolean = false;
  capital: Country[] = [];

  constructor( private capitalService: CapitalService){}

  buscar( termino: string){
    this.errorExist = false;
    this.termino = termino;
    this.capitalService.searchCapital(this.termino)
    .subscribe( (capital) => {
      this.capital = capital;
    }, (err) => {
        this.errorExist = true;
        this.capital = [];
      
    });
  }

  sugest(termino: string){
    this.errorExist = false;
    
  }

}
