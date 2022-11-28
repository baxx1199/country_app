import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../../service/theme.service";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.sass']
})
export class BarComponent implements OnInit {
  
  constructor(private theme:ThemeService) { }

  ngOnInit(): void {
  }

  change_mode(){
    this.theme.toggleMode()
    
  }

}
