import { Problem } from '../../../src/app/problem';

export class Problem8 extends Problem {

    constructor(id: number, input: number) {
        super(id, input);
        this.description = `
        The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
        73167176531330624919225119674426574742355349194934
        96983520312774506326239578318016984801869478851843
        85861560789112949495459501737958331952853208805511
        12540698747158523863050715693290963295227443043557
        66896648950445244523161731856403098711121722383113
        62229893423380308135336276614282806444486645238749
        30358907296290491560440772390713810515859307960866
        70172427121883998797908792274921901699720888093776
        65727333001053367881220235421809751254540594752243
        52584907711670556013604839586446706324415722155397
        53697817977846174064955149290862569321978468622482
        83972241375657056057490261407972968652414535100474
        82166370484403199890008895243450658541227588666881
        16427171479924442928230863465674813919123162824586
        17866458359124566529476545682848912883142607690042
        24219022671055626321111109370544217506941658960408
        07198403850962455444362981230987879927244284909188
        84580156166097919133875499200524063689912560717606
        05886116467109405077541002256983155200055935729725
        71636269561882670428252483600823257530420752963450 
        Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
        `;
    }

    solveProblem() {
        let n: number = this.input;
        let inputString = "";
        inputString += "73167176531330624919225119674426574742355349194934";
        inputString += "96983520312774506326239578318016984801869478851843";
        inputString += "85861560789112949495459501737958331952853208805511";
        inputString += "12540698747158523863050715693290963295227443043557";
        inputString += "66896648950445244523161731856403098711121722383113";
        inputString += "62229893423380308135336276614282806444486645238749";
        inputString += "30358907296290491560440772390713810515859307960866";
        inputString += "70172427121883998797908792274921901699720888093776";
        inputString += "65727333001053367881220235421809751254540594752243";
        inputString += "52584907711670556013604839586446706324415722155397";
        inputString += "53697817977846174064955149290862569321978468622482";
        inputString += "83972241375657056057490261407972968652414535100474";
        inputString += "82166370484403199890008895243450658541227588666881";
        inputString += "16427171479924442928230863465674813919123162824586";
        inputString += "17866458359124566529476545682848912883142607690042";
        inputString += "24219022671055626321111109370544217506941658960408";
        inputString += "07198403850962455444362981230987879927244284909188";
        inputString += "84580156166097919133875499200524063689912560717606";
        inputString += "05886116467109405077541002256983155200055935729725";
        inputString += "71636269561882670428252483600823257530420752963450";
        let inputArray: number[];
        inputArray = inputString.split('').map(Number);

        let i: number = 0;
        let j: number = 0;
        let temp: number = 1;
        let result: number = 0;
        for(i = 0; i < inputArray.length - n; i++){
            for(j = 0; j < n; j++){
                temp = temp * inputArray[i+j];
            }
            if(temp > result)
            {
                result = temp;
            }
            temp = 1;
        }
        this.result = result;

        this.notes = `
My first thought is to store the 1000-digit number into an array of numbers. Looping through the array in chunks of n, tracking the product, seems to be pretty fast!
Eventually I may play around with allowing an "input" 1000-character array...
        `;
    };
}