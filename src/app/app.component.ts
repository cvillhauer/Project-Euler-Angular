import { Component } from '@angular/core';

import { Problem } from '../../src/app/problem';
import { Problem1 } from '../../src/app/problems/problem1';
import { Problem2 } from '../../src/app/problems/problem2';
import { Problem3 } from '../../src/app/problems/problem3';
import { Problem4 } from '../../src/app/problems/problem4';
import { Problem5 } from '../../src/app/problems/problem5';
import { Problem6 } from '../../src/app/problems/problem6';
import { Problem7 } from '../../src/app/problems/problem7';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public problems: Problem[] = [];

  constructor() {

    //PROBLEM 1
    let problem1 = new Problem1(1, 1000);
    this.problems.push(problem1);

    //PROBLEM 2
    let problem2 = new Problem2(2, 4000000);
    this.problems.push(problem2);


    //PROBLEM 3
    let problem3 = new Problem3(3, 600851475143);
    this.problems.push(problem3);


    //PROBLEM 4
    let problem4 = new Problem4(4, 999);
    this.problems.push(problem4);


    //PROBLEM 5
    let problem5 = new Problem5(5, 20);
    this.problems.push(problem5);


    //PROBLEM 6
    let problem6 = new Problem6(6, 100);
    this.problems.push(problem6);


    //PROBLEM 7
    let problem7 = new Problem7(7, 10001);
    this.problems.push(problem7);
  }
}
