import { Problem } from '../../../src/app/problem';

export class Problem5 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. 
        What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let i: number = 1;
        let j: number = n;
        let result: number = 1;
        let multiple: boolean = false;

        while (!multiple && j <= 3628800) {
            for (i = 1; i <= n; i++) {
                if (j % i != 0) {
                    j = j + n;
                    i = 1;
                }
                multiple = true;
                result = j;
            }
        }
        this.result = result;

        this.notes = `
First thing I did was play around with numbers 1-10 compared to 2520. 10! is equal to 1440 * 2520, which feels interesting!
Next of course I tried the most obvious brute-force solution to see what the timing looked like.
I got the right answer, but it took over 4 seconds to get there.
Since we know the final number must be divisible by n, we can increment j by n instead of 1, and that gets us down to 600 miliseconds.
This smells like a solution that could be sped up with usage of prime factorials...
        `;
    };
}