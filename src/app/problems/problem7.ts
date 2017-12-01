import { Problem } from '../../../src/app/problem';

export class Problem7 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13. What is the 10 001st prime number?
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let currentNumber: number = 2; //We'll count 2 as a prime number by default
        let result: number = 0;

        for (let primeCount = 1; primeCount < n; currentNumber++) {
            if (this.isPrime(currentNumber)) {
                primeCount = primeCount + 1;
                result = currentNumber;
            }
        }
        this.result = result;

        this.notes = `
This was actually my first Euler problem. First, I tried brute forcing by looping all the way through 2-n to see if a number n had any other factors.
This worked, but took way too long, especially if you do it 10,000 times. 
Then I realized that any factor that might exist on the lower end has a cooresponding factor on the higher end.
For example, if 1009 is not divisible by 2, it is also not divisible by ~500. So, I cut down my loop to 2-(n/2), which also worked and was much faster.
After more research on prime numbers, I learned that the square root of a number is the true 'halfway point' for possible lower-half factors.
For example, 49 is not a prime, but the only factor it has is 7, which is its square root. 
If we know there are no factors before 7, we know there are no factors after 7 because they would have to have a cooresponding lower factor.
        `;
    };
}