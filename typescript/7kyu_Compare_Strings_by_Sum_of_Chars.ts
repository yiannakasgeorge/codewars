/**
 * Created by George on 09/05/2017.
 * Compare two strings by comparing the sum of their values (ASCII character code).
 For comparing treat all letters as UpperCase.

 Null-Strings should be treated as if they are empty strings.
 If the string contains other characters than letters, treat the whole string as it would be empty.

 Examples:

 "AD","BC" -> equal

 "AD","DD" -> not equal

 "gf","FG" -> equal

 "zz1","" -> equal

 "ZzZz", "ffPFF" -> equal

 "kl", "lz" -> not equal

 null, "" -> equal

 Your method should return true, if the strings are equal and false if they are not equal.

 */

export function compare(s1:string, s2:string):boolean {

    console.log(s1, s2)

    let s1sum: number = 0;
    let s2sum: number = 0;
    s1 = s1 === null || !/^[a-zA-Z]+$/i.test(s1) ? "" : s1.toUpperCase();
    s2 = s2 === null || !/^[a-zA-Z]+$/i.test(s1) ? "" : s2.toUpperCase();

    for (let i: number = 0; i < s1.length; i++){
        s1sum += s1.charCodeAt(i);
    }

    for (let i: number = 0; i < s2.length; i++){
        s2sum += s2.charCodeAt(i);
    }

    return s1sum === s2sum ? true : false;

}