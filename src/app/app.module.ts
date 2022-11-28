import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,  routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './views/bar/bar.component';
import { HomeComponent } from './views/home/home.component';
import { InfoComponent } from './views/info/info.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectBarComponent } from './components/selectBar/select-bar/select-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    HomeComponent,
    InfoComponent,
    routingComponents,
    SelectBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
