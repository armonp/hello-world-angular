import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 9';
  name: string = "no name yet";
  h1Color:string ="red";
  isHidden: boolean = false;
  txtValue: string = "initial value";
  
  setName(): void {
    this.name = "Armon";
  }
  toggleColor(): void {
    this.h1Color = (this.h1Color == "red") ? "blue" : "red";
  }
  flipHidden(): void {
    this.isHidden = !this.isHidden;
  }
  setTxtValue(val: string):void {
    this.txtValue = val;
  }
}

