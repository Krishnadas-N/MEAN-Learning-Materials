import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonDispalyComponent } from './Component/button-dispaly/button-dispaly.component';

const routes: Routes = [
  {
    path:'home',
    outlet:'section2',
    component:ButtonDispalyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
