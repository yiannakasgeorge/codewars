/**
 * Created by George on 09/05/2017.
 * A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.

 In this kata you have to implement a function generate that receives a length and has to return a random binary strign with length characters.

 Example:

 Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.
 */
export function generate(length: number): string {
    // code
    let output: string = "";

    if(length !== undefined) {
        for(let i = 0; i < length; i++){
            output += Math.round(Math.random());
        }
    }
    return output;
}