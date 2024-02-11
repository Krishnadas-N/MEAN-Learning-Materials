import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleDirective]'
})
export class ToggleDirectiveDirective {

  constructor(private el:ElementRef) { }
  buttonClicked:boolean = false;
  @HostListener('click')
  onClick() {
    this.buttonClicked=!this.buttonClicked;
    if(this.buttonClicked){
      this.el.nativeElement.style.background='Red'
    }else{
      this.el.nativeElement.style.background="Blue"
    }
  }
  
}
