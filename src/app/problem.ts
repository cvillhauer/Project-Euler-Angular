export class Problem {
    id: number;
    title: string;
    description: string;
    notes: string;
    result: number;
    duration: number;

    constructor (id: number, description: string){
        this.id = id;
        this.description = description;
        this.notes = "";
        this.title = "Problem " + this.id;
        this.result = 0;
        this.duration = 0;
    }

    solveProblemTimed(){
        var elapsedTime = 0;
        var startTime = new Date().getTime();
        var endTime = new Date().getTime();
        elapsedTime = endTime-startTime;
        var start = performance.now();
        this.solveProblem();
        this.duration = (performance.now() - start);
    }

    solveProblem()
    {
        console.log("Solution not yet implemented.");
    }

    isPrime(input: number)
    {
        let result: boolean = false;
        for(let divisor = 2; divisor <= input; divisor++)
        {
          if(input % divisor == 0)
          {
            result = false;
            break;
          }
          else if(divisor >= (Math.sqrt(input)))
          {
            result = true;
            break;
          }
        }
        return result;
    }
}