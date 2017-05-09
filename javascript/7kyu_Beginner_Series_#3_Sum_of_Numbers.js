/**
 * Created by George on 09/05/2017.
 * Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

 Note! a and b are not ordered!

 Example:
 GetSum(1, 0) == 1   // 1 + 0 = 1
 GetSum(1, 2) == 3   // 1 + 2 = 3
 GetSum(0, 1) == 1   // 0 + 1 = 1
 GetSum(1, 1) == 1   // 1 Since both are same
 GetSum(-1, 0) == -1 // -1 + 0 = -1
 GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
 */
function GetSum( a,b )
{
    if(a==b) return a;

    var smallest = a<b ? a : b;
    var biggest = a>b ? a : b;
    var sum = smallest;

    while(smallest!==biggest){
        smallest = smallest+1;
        sum = sum + smallest;
    }
    return sum;
}