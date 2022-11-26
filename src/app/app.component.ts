import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme, ThemeService } from "../app/service/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  
  theme:string

  title = 'countriesApp';
  
  constructor(private themeS:ThemeService){}

  ngOnInit(){
    this.themeS.mode$.subscribe((res)=>this.theme=res)
  }
}
