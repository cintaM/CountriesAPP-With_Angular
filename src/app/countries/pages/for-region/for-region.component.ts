import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { RegionService } from '../../services/region.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styleUrls: ['./for-region.component.css']
})
export class ForRegionComponent {

regions: string[] = ["africa", "americas", "asia", "europe", "oceania"]
regionActive: string = '';
countries: Country[] = [];
errorExist: boolean = false;

constructor( private regionService: RegionService){}

activateRegion(region:string){
  if(region === this.regionActive){return;}
  this.regionActive = region;
  this.regionService.searchRegion(region)
  .subscribe( (countries) => {
    this.countries = countries;
  }, (err: any) => {
    console.log(err)
      this.countries = [];
    
  });
  
}

}
