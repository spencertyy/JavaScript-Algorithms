322. Coin Change
Medium


You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
你手里有面额分别为 1 元、2 元、5 元 的硬币，数量无限。
你要用这些去拼出 amount 这个数。
不是随便选，而是从这三个面额里凑出目标金额。
 */
var coinChange = function(coins, amount) {
    const INF = amount + 1;//+1 用来表示“目前不可达
    const dp = new Array(amount + 1).fill(INF);//创建一个长度为 amount + 1 的数组，把这个数组的每个格子都先填上 INF，也就是“暂时不可达”。
    dp[0] = 0;//金额为 0 的时候，不用拿任何硬币，所以最少枚数是 0。这也是动态规划的“起点”。

    for(let a = 1; a <= amount; a++ ){//外循环 计算 dp[a] 的值
        for(const c of coins){//内循环 遍历（元素值）数组的值（面额本身）
            if (a - c >= 0){//尝试让面额 c 当作“最后一枚硬币”，看它是否能把 a 这个金额给补齐。
                dp[a] = Math.min(dp[a], dp[a - c]+1);//对所有面额尝试一次，取最小的枚数更新 dp[a]。
            }
        }
    }//	如果还是 INF，说明始终没被更新过，也就是不可达，返回 -1。
    return dp[amount] === INF ? -1 : dp[amount];
};