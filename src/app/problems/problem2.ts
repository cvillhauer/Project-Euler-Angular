import { Problem } from '../../../src/app/problem';

export class Problem2 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
        By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... 
        By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let i: number = 1;
        let j: number = 1;
        let k: number = 1;
        let result: number = 0;
        while (i <= n) {
            if (i % 2 == 0) {
                result = result + i;
            }
            k = i + j;
            j = i;
            i = k;
        }
        this.result = result;

        this.notes = `
The only sticky point here is the leap-frogging with i, j, and k. Handwriting out a diagram/flow chart of the logic helps me with stuff like this.
        `;
    }
}