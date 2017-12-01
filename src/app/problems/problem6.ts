import { Problem } from '../../../src/app/problem';

export class Problem6 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        The sum of the squares of the first ten natural numbers is, 1^2 + 2^2 + ... + 10^2 = 385 
        The square of the sum of the first ten natural numbers is, (1 + 2 + ... + 10)^2 = 55^2 = 3025
        Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640. 
        Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.";
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let i: number = 1;
        let result: number = 0;
        let sumOfSquares: number = 0;
        let squareOfSums: number = 0;
        for (i = 1; i <= n; i++) {
            sumOfSquares += i * i;
        }
        for (i = 1; i <= n; i++) {
            squareOfSums += i;
        }
        squareOfSums = squareOfSums * squareOfSums;
        result = squareOfSums - sumOfSquares;
        this.result = result;

        this.notes = `
This one was very straight-forward and the brute-force method takes a mere milisecond to yield the correct answer!
        `;
    };
}