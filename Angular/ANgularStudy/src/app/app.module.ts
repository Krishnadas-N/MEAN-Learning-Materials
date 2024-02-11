import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisableButtonDirective } from './disable-button.directive';
import { PipePipe } from './Pipes/pipe.pipe';
import { FormsModule } from '@angular/forms';
import { Component1Component } from './COMPONENTS/component-1/component-1.component';
import { ToggleDirectiveDirective } from './Directive/toggle-directive.directive';
import { ButtonDispalyComponent } from './Component/button-dispaly/button-dispaly.component';
import { ButtonComponentComponent } from './Component/button-component/button-component.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
   
    AppComponent,
    DisableButtonDirective,
    PipePipe,
    Component1Component,
    ToggleDirectiveDirective,
    ButtonDispalyComponent,
    ButtonComponentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]//Indicates starting of components
})
export class AppModule { }
