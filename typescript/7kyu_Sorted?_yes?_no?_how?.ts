/**
 * Created by George on 09/05/2017.
 * Implement the method isSortedAndHow, which accepts an array of integers, and returns one of the following:

 'yes, ascending' - if the numbers in the array are sorted in an ascending way
 'yes, descending' - if the numbers in the array are sorted in a descending way
 'no'
 You can assume the array will always be valid, and there will always be one correct answer.
 */
export function isSortedAndHow(array:number[]): string {

    let descending: boolean [] = [];
    let ascending: boolean [] = [];

    array.forEach(function(currentValue: number,index: number){

        if(index === 0) return;

        let previousValue = array[index-1];

        if(previousValue < currentValue){ // ascending
            ascending.push(true);
        } else if (previousValue > currentValue) { // descending
            descending.push(true);
        } else {
            ascending.push(true);
            descending.push(true);
        }

    });
    console.log(array)
    return ascending.length === array.length-1 ? "yes, ascending" : descending.length === array.length-1 ? "yes, descending" : "no";
}