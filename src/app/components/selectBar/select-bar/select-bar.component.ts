import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.sass']
})
export class SelectBarComponent {
    
    @Output() region = new EventEmitter<string>();
    
    clickBar:boolean =false
    regionSelection:string=""

    displayopcion(){
      this.clickBar=!this.clickBar

    }
    initalClick(){
      this.clickBar=false
      
    }
    

    setRegion(reg:string){
        this.regionSelection=reg
        this.region.emit(this.regionSelection)
        
    }
}
