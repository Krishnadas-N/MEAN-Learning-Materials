import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, Routes } from '@angular/router';
import { LazyComponentComponent } from '../lazy-component/lazy-component.component';

const path:Route={
  path:'',
  component:LazyComponentComponent
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LazyLoadedModuleModule { }
