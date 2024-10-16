import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public userInput :any
  public sum:any;
  onClick(){
    this.sum = 0
  }
}
