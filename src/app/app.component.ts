import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taak1';
  aantalBeurtenResterend: number = 10;
  randomNumber: number = Math.floor(Math.random()*100);
  feedback: string = "";
  isDisabled = false;
  

  berekenGok(value: number) {
    if( this.aantalBeurtenResterend == 0){
      this.isDisabled = true;
    } else{
      if( value == this.randomNumber ){
        this.feedback = `${value} is gelijk aan het random-getal! HOERA Confetti!`;
        this.isDisabled = true;
      } else if( value > this.randomNumber ){
        this.feedback = `${value} is groter dan random-getal...`;
      } else if( value < this.randomNumber){
        this.feedback = `${value} is kleiner dan random-getal...`;
      }
      
      this.aantalBeurtenResterend -= 1;
    }
  }
}
