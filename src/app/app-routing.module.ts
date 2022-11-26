import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "../app/views/home/home.component";
import { InfoComponent } from "../app/views/info/info.component";


const routes: Routes = [
  {path:'', redirectTo:'/', pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'details/:country', component:InfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
