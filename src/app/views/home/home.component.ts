import { Component, OnInit, ViewChild , ElementRef} from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService,Theme } from '../../service/theme.service';
import { ApiService } from 'src/app/service/api.service';
import { ICountrymodel } from 'src/app/service/country.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  theme:string
  @ViewChild('byname')byname:ElementRef;
  countrys:ICountrymodel[]=[];
  byNameIn:string
  region:string;


  constructor(private api:ApiService, private themeS:ThemeService) { }

  ngOnInit(): void {
    this.themeS.mode$.subscribe((res)=>this.theme=res)
    this.renderCountrys()
  
  }
  
  renderCountrys(){
    this.api.getCountrys().subscribe((data)=>{
      this.countrys=data 
    });
  }

  setRegion(event:any){
      this.region=event.target.value;
      console.log(this.region)
      this.searchByRegion()

  }

  searchByRegion(){
    this.api.getCountryByRegion(this.region).subscribe((res)=>{
        
      this.countrys=res
      
    })

  }
  setName($event:any){
    if(this.byNameIn===''){
      this.renderCountrys()
    }else{
      this.api.getCountrysByName(this.byNameIn).subscribe((res)=>{
        
        this.countrys=res
        console.log(res)
        
      })
    }
  }

 
}
