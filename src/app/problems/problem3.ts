import { Problem } from '../../../src/app/problem';

export class Problem3 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let i: number = 2;
        let j: number = n;
        let result: number = 0;
        for (i = 2; i <= j; i++) {
            if (j % i == 0) {
                //Together, these "i" results will be the prime factorization of n
                if (i > result) {
                    result = i;
                }
                j = j / i;
                i = 2;
            }
        }
        this.result = result;

        this.notes = `
On this one, I stumbled onto a solution that yielded the correct answer right away. However, it did not always produce a correct answer, if you varied n.
I was cutting off the search for prime factors at the square root of n. 14 is a counter example - 7 is higher than the square root of 14 yet is its highest prime factor.
However, brute forcing by finding every factor between 2-n, then identifying the highest prime one, would be much too slow.
I needed to change the way I was thinking about this. Researching factorization on the internet helped me a lot.
Instead of counting each factor, deciding if it was prime, and then storing it, I should instead step through a prime factorization.
Find the smallest factor of n, and we know it is prime. Divide n by this prime and we have a new number to break down into primes (j).
Repeat this process until your new number itself is prime. Probably the last number you land on is always the highest prime?
There is probably room to increase efficiency here. Though it runs in less than 2 miliseconds, I'm going through the loop almost 10,000 times.
I'm going to leave this as it is for now, but a future Euler problem will probably get me to reuse this, and that might require more speed!
        `;
    }
}