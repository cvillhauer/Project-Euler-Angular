export class Problem {
    id: number;
    title: string;
    description: string;
    result: number;
    duration: number;

    constructor (id: number, description: string){
        this.id = id;
        this.description = description;
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
}