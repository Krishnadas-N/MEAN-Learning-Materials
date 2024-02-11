import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  toDate!: Date;
  src:string="https://www.google.com/images/12";
  altdata:string="No Image FOund"
  title:number=0;

  List:[number,string,boolean]=[123,"Hello",true]
  ngOnInit() {
    this.toDate = new Date(); // Initialize toDate with the current date
  }

  name="Ashiquee"
  canYouBeilve=true

  getValue(value:HTMLInputElement){
    alert(value.value)
    alert(value.type)
  }

  itthisDaddy=true;

  MyName="This si my Bage of My GGisa Asoas Asoo Nkask"
  

  callFromChild(event:any){
    console.log(event)
    alert(event.value)
    this.title=event.value
  }

}
