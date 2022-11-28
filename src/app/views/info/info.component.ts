import { Component, OnInit } from '@angular/core';
import { ICountrymodel, Currency, Language} from "../../service/country.model";
import { ApiService } from "../../service/api.service";
import { ActivatedRoute } from "@angular/router";




@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {
  countryDetails:ICountrymodel[]=[]
  
  borders:ICountrymodel[]=[]

  nameC:string


  constructor(private activedRoot:ActivatedRoute, private api:ApiService) { 
  }


  ngOnInit(): void {
    this.activedRoot.params.subscribe((res)=>{
      
      this.api.getCountrysByName(res['country']).subscribe( (res)=>{
        this.countryDetails= res
        
        this.api.getByCode(this.countryDetails[0].borders).subscribe((res)=>{
          this.borders=res
          
        })
      })

    }) 
    
  }
  
   getCurrencies(currencie:Currency[]){
    return currencie.map(curren=>curren['name'] + " "+ curren['symbol']).join(', ');
   }
   getLanguages(language:Language[]){
    return language.map(l=>l['name']).join(', ');
   }
}