import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum Theme {
  light = 'light',
  dark = 'dark',
}


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private mode = this.getThemeOfLocaleStorage()

  constructor() {
    
  }

  get mode$(): Observable<Theme> {
  
    return this.mode.asObservable();
  }

  toggleMode() {
    if (this.mode.value === Theme.light) {
      this.mode.next(Theme.dark);
      
    } else {
      this.mode.next(Theme.light);
      
    }
    localStorage.setItem("themeMode", JSON.stringify({theme:this.mode.value}));
    
  }

  getThemeOfLocaleStorage():BehaviorSubject<Theme>{
    if(localStorage.getItem("themeMode")!=null){
      let themeSave = JSON.parse( localStorage.getItem("themeMode")!);
      let modeAux:BehaviorSubject<Theme>;

        if(themeSave['theme']===Theme.light ){
          modeAux = new BehaviorSubject<Theme>(Theme.light);
        }else{
  
          modeAux = new BehaviorSubject<Theme>(Theme.dark);
        }
        return modeAux
    }else{
       return new BehaviorSubject<Theme>(Theme.light);
    }
 
  }
  
}
