70. Climbing Stairs

Easy

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=1) return 1;

    let prev2 =1;//ways(0)
    let prev1 =1;//ways(1)
    for(let i = 2;i<=n;i++){//从第2阶开始算
        const cur = prev1 + prev2; //2=1+1 —> 3=2+1 -> 2+1=3 -> 5+3=8 
        prev2 = prev1;//prev2=1 -> prev2=2 -> prev2=3 -> prev2=5
        prev1 = cur;//prev1=2 -> prev1=3 -> prev1=5 -> prev1=8
    }
    return prev1;
};