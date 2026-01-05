190. Reverse Bits
Easy

Reverse bits of a given 32 bits signed integer.


Example 1:

Input: n = 43261596

Output: 964176192

Explanation:

Integer	Binary
43261596	00000010100101000001111010011100
964176192	00111001011110000010100101000000
Example 2:

Input: n = 2147483644

Output: 1073741822

Explanation:

Integer	Binary
2147483644	01111111111111111111111111111100
1073741822	00111111111111111111111111111110

题目： 把这个数的 二进制从左到右完全反转，然后返回反转后的十进制结果。

n 的最后一位 → 放到 result 的最前面
n 的倒数第二位 → 放到 result 的第二位
…
重复 32 次
得到一个完全反过来的 32 位数
返回它

			& and
			| or
			 
/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;

    for(let i = 0; i < 32; i++){
        result = (result << 1) | (n & 1);//result 往左挪出一个空位，准备放新的 bit ｜ 把刚才 n 的最后一位 塞到 result 最右边空出来的位置
        n = n >>> 1;//我已经取走了 n 的最后一位，下一位请排队！
    }
    return result >>> 0;//把 result 变成正常的 32 位正整数格式
};



