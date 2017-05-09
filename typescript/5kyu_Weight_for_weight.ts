/**
 * Created by George on 09/05/2017.
 * My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

 I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

 For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

 Example:

 "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

 When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

 All numbers in the list are positive numbers and the list can be empty.

 */

export class G964 {

    public static orderWeight = (strng) => {
        // Your code
        let sumOfDigits = function(str: string): number {
            let newValue: number = 0;
            for(let i: number = 0; i < str.length; i++){
                let currentVal: number = parseInt(str[i]);
                newValue = newValue + currentVal;
            }
            return newValue;
        };

        return strng.split(" ").sort(function(a,b){
            let _sumOfDigits: number = sumOfDigits(a)-sumOfDigits(b);
            if(_sumOfDigits === 0){
                return a > b ? 1 : -1;
            }else{
                return _sumOfDigits;
            }
        }).join(" ");

    }
}