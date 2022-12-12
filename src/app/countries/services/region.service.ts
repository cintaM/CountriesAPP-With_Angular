import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }

  private apiURL: string = 'https://restcountries.com/v3.1'

  searchRegion( region: string): Observable<Country[]>{
    const url = `${this.apiURL}/region/${region}`
    return this.http.get<Country[]>(url)
  }
}
