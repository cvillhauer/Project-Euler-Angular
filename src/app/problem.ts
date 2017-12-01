export class Problem {
    id: number;
    title: string;
    description: string;
    notes: string;
    input: number;
    result: number;
    duration: number;

    constructor(id: number, input: number) {
        this.id = id;
        this.description = "";
        this.notes = "";
        this.input = input;
        this.title = "Problem " + this.id;
        this.result = 0;
        this.duration = 0;
    }

    solveProblem() {
        console.log("Solution not yet implemented.");
    }

    solveProblemTimed() {
        var elapsedTime = 0;
        var startTime = new Date().getTime();
        var endTime = new Date().getTime();
        elapsedTime = endTime - startTime;
        var start = performance.now();
        this.solveProblem();
        this.duration = (performance.now() - start);
    }

    isPrime(input: number) {
        let result: boolean = false;
        for (let divisor = 2; divisor <= input; divisor++) {
            if (input % divisor == 0) {
                result = false;
                break;
            }
            else if (divisor >= (Math.sqrt(input))) {
                result = true;
                break;
            }
        }
        return result;
    }

    isPalindrome(input: number) {
        let result: boolean = true;
        let stringInput: string = String(input);
        for (let i: number = 0; i < stringInput.length; i++) {
            if (stringInput[i] != stringInput[stringInput.length - i - 1]) {
                result = false;
                break;
            }
        }
        return result;
    }
}