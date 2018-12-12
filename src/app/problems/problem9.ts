import { Problem } from '../../../src/app/problem';

export class Problem9 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
        a2 + b2 = c2
        For example, 32 + 42 = 9 + 16 = 25 = 52.
        There exists exactly one Pythagorean triplet for which a + b + c = 1000.
        Find the product abc.
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let result: number = 0;
        
        let a: number = 0;
        let b: number = 0;
        let c: number = 0;
        let maxa: number = n/3-1;
        console.log("Max a: " + maxa);
        let maxb: number = n/2-1;
        console.log("Max b: " + maxb);
        let maxc: number = n-2-1;
        console.log("Max c: " + maxc);

        for(a = 1; a <= maxa; a++)
        {
            for(b = (a+1); b <= maxb; b++)
            {
                for(c = (b+1); c <= maxc; c++)
                {
                    if(a + b + c == n)
                    {
                        if(a*a + b*b == c*c)
                        {
                            console.log("a=" + a + ", b=" + b + ", c=" + c);
                            result = a*b*c;
                            break;
                        }
                    }
                }
            }
        }
        
        this.result = result;

        this.notes = `
        I think the key to this one is to speed up your loops by first figuring out what the possible max values could be for a, b, and c, based on input n.
        `;
    }
}