import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public problem1: number = 0;

  public problem7: number = 0;

  solveProblem1(){
    let n: number = 1000;
    let i: number = 1;
    let result: number = 0;
    for(i = 1; i < n; i++){
      if(i % 3 == 0 || i % 5 == 0){
        result = result + i;
      }
    }
    this.problem1 = result;
  }


  solveProblem7(){
    console.log("Solving...");
    let primeCount: number = 0;
    let currentNumber: number = 2; //2 will not be counted as a prime number
    let result: number = 0;
    
    while(primeCount < 10000) //The result will be 10,000th prime number, because we are skipping 2
    {
      currentNumber = currentNumber + 1; 
      for(let divisor = 2; divisor < currentNumber; divisor++)
      {
        if(currentNumber % divisor == 0)
        {
          break;
        }
        else if(divisor > (currentNumber / 2))
        {
          primeCount = primeCount + 1;
          result = currentNumber;
          break;
        }
      }
    }
    console.log("Solved.");
    this.problem7 = result;
  }
}
