371. Sum of Two Integers
Medium


Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 

Constraints:

-1000 <= a, b <= 1000

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while ( b !== 0){
        const carry = (a & b) << 1;// 检查哪位要进位，并左移
        a = a ^ b;  // 本位加法（不带进位）
        b = carry;  // 把进位作为“下一个b”，进入下一轮
    }//所有要进位的地方都处理完了（没有再往左要进的东西, 此时 a 就是最终的加法结果。
    return a;
};