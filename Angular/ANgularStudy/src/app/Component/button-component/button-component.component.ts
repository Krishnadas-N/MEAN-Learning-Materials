import { Component } from '@angular/core';
import { IncrementCOunterService } from '../../Services/increment-counter.service';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.css'
})
export class ButtonComponentComponent  {
  constructor(private counter:IncrementCOunterService){}

  onClick(){
    this.counter.increment()
  }
}
