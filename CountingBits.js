338. Counting Bits
Easy

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

/**
 * @param {number} n
 * @return {number[]}
 *///题目要用 O(n)
var countBits = function(n) {
    const ans = new Array(n+1).fill(0);//创建一个新的array里面都是空的并且长度为n的+1，因为要从0到n算，然后里面全部放初始值0
    //从1开始跑，因为0的index是0，换成二进制还是0，而n是从0开始到n的数字。
    for(let i = 1; i <=n; i++){
        ans[i] = ans[i >> 1] + (i & 1);
    }
    //ans[i] = i >> 1：把二进制最后一位“砍掉” + i & 1 = 最后一位是否是 1（0 或 1）
    //ans[i >> 1]：中括号 [] 表示访问数组元素 👉 这是在取数组 ans 里“某个 index 的值”
    //(i & 1)：小括号 () 表示把表达式先计算出来 👉 这是在计算一个数学式子（位运算），结果是 0 或 1
    return ans;
};