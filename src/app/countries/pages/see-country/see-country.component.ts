import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countries.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountryComponent implements OnInit {


country!: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountryService ){}


  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => 
        this.countryService.getCountryAlphaCode(id),
      ),
      tap(console.log)
    )
    .subscribe(country => {
      console.log(country)
      this.country = country[0];
    })
    // this.activatedRoute.params
    // .subscribe(({id})=> {
    //   console.log(id);

    //   this.countryService.getCountryAlphaCode(id)
    //   .subscribe(country => {
    //     console.log(country);
    //   })
    // })
    
  }

}


