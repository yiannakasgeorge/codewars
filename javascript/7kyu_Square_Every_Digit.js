/**
 * Created by George on 09/05/2017.
 * Welcome. In this kata, you are asked to square every digit of a number.

 For example, if we run 9119 through the function, 811181 will come out.

 Note: The function accepts an integer and returns an integer
 */
function squareDigits(num){
    //may the code be with you
    return Number (num.toString().split("").map(function(v){
        return Math.pow(parseInt(v),2);
    }).join(""));
}