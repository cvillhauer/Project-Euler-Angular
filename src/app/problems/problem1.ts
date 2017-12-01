import { Problem } from '../../../src/app/problem';

export class Problem1 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
        The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let i: number = 1;
        let result: number = 0;
        for (i = 1; i < n; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                result = result + i;
            }
        }
        this.result = result;

        this.notes = `
Fairly straightforward! The most obvious 'brute force' solution is also probably the fastest.
        `;
    }
}