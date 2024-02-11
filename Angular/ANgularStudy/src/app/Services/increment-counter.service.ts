import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncrementCOunterService {

  constructor() { }

  private counter=0;
  private counterSubject=new Subject<number>();
  Observer$=this.counterSubject.asObservable();
  
  increment(){
    this.counter++;
    this.counterSubject.next(this.counter)
  }
}
