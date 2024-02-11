import { Component,OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrl: './component-1.component.css'
})
export class Component1Component implements OnInit, OnDestroy{

  count=0

  @Input() SayMyname!:string;

  @Output() EventEmit: EventEmitter<number> = new EventEmitter<number>();
  
  increment(){
    this.count++
    this.EventEmit.emit(this.count);
  }
  
  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}


