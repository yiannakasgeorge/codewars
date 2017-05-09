export function foldArray(array:number[], runs:number) : number[]
{

    // console.log(recursiveRun(array, runs));
    let output: number []  = <number []>recursiveRun(array, runs);
    return output;
}

export function recursiveRun(inputArray: number [], runs: number): number [] {

    let arrayLength: number = inputArray.length;
    let isOdd: boolean = arrayLength % 2 !== 0;
    let outputArray: number [] = [];
    let middleArrayIndex: number;
    let middleNum: number;
    let totalNumsOnEachSide: number;

    if(isOdd){
        middleArrayIndex = Math.floor(arrayLength/2);
        middleNum = inputArray[middleArrayIndex];
        totalNumsOnEachSide = (arrayLength-1)/2;
    } else {
        totalNumsOnEachSide = arrayLength/2;
    }

    if(totalNumsOnEachSide === 1){

        let a: number = inputArray[0];
        let b: number = inputArray[arrayLength-1];
        outputArray.push(a+b);
    }else {
        for(let i = 0; i < totalNumsOnEachSide; i++) {
            let a: number = inputArray[i];
            let b: number = inputArray[arrayLength-1-i];
            outputArray.push(a+b);
        }
    }

    if(isOdd) outputArray.push(middleNum);


//           console.log(inputArray)
//           console.log(outputArray)

    runs--;

    if(runs!==0) {
//         console.log("runs",_runs)
        recursiveRun(outputArray, runs);
    } else {
        return outputArray;
    }
}