import { Component, OnInit } from '@angular/core';
import { IncrementCOunterService } from '../../Services/increment-counter.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-button-dispaly',
  templateUrl: './button-dispaly.component.html',
  styleUrl: './button-dispaly.component.css'
})
export class ButtonDispalyComponent implements OnInit {
  count:number=0;
  constructor(private  buttonDisplayService: IncrementCOunterService) {}

  ngOnInit(): void {
      this.buttonDisplayService.Observer$.subscribe((value)=>{
        console.log("Value in Observer : "+ value);
        this.count=value;
      })

      this.Counetr$.subscribe(
        (value)=>console.log('Next Value is'+value),
      )
  }

  Counetr$=new Observable((observe)=>{
   setInterval(()=>{
    observe.next(this.count++)
    },1000)
  })

  newOfObservable$ = of([1,2,3,4,5,3,32,2,12,12,2,12,21,1,12,12,12,2,21,,12,12])
}
