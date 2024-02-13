import { Component } from '@angular/core';
import { IncrementCOunterService } from '../../Services/increment-counter.service';
import { AsyncSubject, BehaviorSubject, Observable, Subject } from 'rxjs';

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
  obesrval$=new Observable<number>(ele=>{
    ele.next(Math.random()*10)
  })

  // subj = new BehaviorSubject<number>(1232);
  // this.subj.subscribe(res=>{
  //   console.log(res);
  // })
  // this.subj.next();

  // repl = new AsyncSubject();
  // repl.next(22);
  // repl.next(2);
  // repl.complete()

  // subject=new Subject<number>();

  // subject.subscribe(res=>{
  //   console.log(res);
  // });
  // subject.subscribe(res=>{
  //   console.log(res);
  // })

  // subject.next(Math.random())
}
