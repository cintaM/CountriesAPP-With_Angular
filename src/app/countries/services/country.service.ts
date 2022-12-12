import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient ) {
   }

   searchCountry(termino: String): Observable<Country[]>{
    const url = `${this.apiURL}/name/${termino}`
    return this.http.get<Country[]>(url)
    
  }

  
  getCountryAlphaCode(id: String): Observable<Country>{
    const url = `${this.apiURL}/alpha/${id}`
    return this.http.get<Country>(url)
    
  }

}
