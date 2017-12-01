import { Problem } from '../../../src/app/problem';

export class Problem4 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. 
        Find the largest palindrome made from the product of two 3-digit numbers.
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let i: number = n;
        let j: number = n;
        let result: number = 0;
        while (i % 11 != 0) {
            i = i - 1; //First let's find the highest 3-digit number that is divisible by 11.
        }
        while (i > 0) {
            for (j = n; j >= 1; j--) {
                if (this.isPalindrome(i * j)) {
                    if (i * j > result) {
                        result = i * j;
                    }
                    break;
                }
            }
            i = i - 11; //Step down by 11 to ensure next value is also divisible by 11.
        }
        this.result = result;

        this.notes = `
I have no idea if there is a 'mathy' way to determine a number is a palindrome, but converting a number to a string and checking for palindrome seems like an obvious option.
Shockingly, I got the right answer on my first try with a brute force attempt, even though I'm great at making off-by-one index errors.
A performance of ~200 miliseconds isn't bad, but I'm sure we can do better.
I wonder if it is faster to count down from n-1 rather than going from 1-n... This only works if we can break once we have the largest palindrome though.
A lot of different methods I tried that were faster would get a lower (wrong) palindrome answer.
A bit of internet research yielded the theoem that a palindrome number is divisible by 11, which means either i or j need to be divisible by 11.
This made me decide to short-circuit my loops so that the outer loop steps down by 11 each time, which sped things up a lot. Down to 20 miliseconds...
I squeezed out a tiny bit more speed by breaking out of the inner loop once the first palindrome for that i value is found. Lowering j will only get us smaller palindromes.
To maximize flexibility of my code, I'm not bothering to set the lower limits of i and j to 100 (smallest 3-digit number), I'm just leaving them at 1.
        `;
    };
}