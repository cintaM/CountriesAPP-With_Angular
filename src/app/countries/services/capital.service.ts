import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiURL: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient ) {
   }

   searchCapital(termino: String): Observable<Country[]>{
    const url = `${this.apiURL}/capital/${termino}`
    return this.http.get<Country[]>(url)
    
  }
}
