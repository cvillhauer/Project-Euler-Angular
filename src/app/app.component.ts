import { Component } from '@angular/core';

import { Problem } from '../../src/app/problem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public problems: Problem[] = [];

  constructor(){
    //PROBLEM 1
    let problem1 = new Problem(1, "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.");
    problem1.solveProblem = function(): void { 
      let n: number = 1000;
      let i: number = 1;
      let result: number = 0;
      for(i = 1; i < n; i++){
        if(i % 3 == 0 || i % 5 == 0){
          result = result + i;
        }
      }
      this.result = result; 
    };
    this.problems.push(problem1);

    //PROBLEM 7
    let problem7 = new Problem(7, "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?");
    problem7.solveProblem = function(): void { 
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
      this.result = result; 
    };
    this.problems.push(problem7);
  }
}
