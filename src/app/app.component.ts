import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


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

  constructor(private _snackBar: MatSnackBar) {}

  berekenGok(value: number) {
    if( this.aantalBeurtenResterend == 0){
      this.isDisabled = true;
    } else{
      if( value == this.randomNumber ){
        this.feedback = `${value} is gelijk aan het random-getal! HOERA Confetti!`;
        this.isDisabled = true;
        this.openSnackBar(`${value} is gelijk aan het random-getal!`, 'HOERA Confetti!');
        
      } else if( value > this.randomNumber ){
        this.feedback = `${value} is groter dan random-getal...`;
        this.openSnackBar(`${value} is groter dan random-getal...`, 'maak getal kleiner');
      } else if( value < this.randomNumber){
        this.feedback = `${value} is kleiner dan random-getal...`;
        this.openSnackBar(`${value} is kleiner dan random-getal...`, 'maak getal groter');
      }
      
      this.aantalBeurtenResterend -= 1;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
}
}