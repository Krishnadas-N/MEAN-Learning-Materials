import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableButton]'
})
export class DisableButtonDirective {

  constructor(private el :ElementRef) { }

  @HostListener('click',['$event'])
  onclick(event:Event){
    this.el.nativeElement.style.background="blue"
    event.preventDefault();
    const btn = <HTMLInputElement>document.activeElement;
    if(!btn.disabled)
      btn.disabled=true;
     setTimeout(()=>{
       btn.disabled=false;
     },2000);
  
  }



}
