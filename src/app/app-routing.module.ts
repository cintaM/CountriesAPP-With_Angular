import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouterOutlet } from "@angular/router";
import { ForCapitalComponent } from "src/app/countries/pages/for-capital/for-capital.component";
import { ForCountryComponent } from "src/app/countries/pages/for-country/for-country.component";
import { ForRegionComponent } from "src/app/countries/pages/for-region/for-region.component";
import { SeeCountryComponent } from "src/app/countries/pages/see-country/see-country.component";


const routes: Routes = [
    {
      path:'',
      component: ForCountryComponent,
      pathMatch:"full"
    },
    {
        path: 'region',
        component: ForRegionComponent,
       
    },
    {
        path: 'capital',
        component: ForCapitalComponent,
       
    },
    {
        path: 'pais/:id',
        component: SeeCountryComponent,
       
    },
    {
        path: '**',
        redirectTo:''
       
    }

]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule,
        RouterOutlet
    ]
})
export class AppRoutingModule{}