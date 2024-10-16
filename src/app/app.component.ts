import { Component } from '@angular/core';
import { StringCalculatorService } from './string-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private stringCalService:StringCalculatorService){}

  public userInput :any
  public sum:any;
  onClick(){
    this.sum = this.stringCalService.add(this.userInput)
  }
}
