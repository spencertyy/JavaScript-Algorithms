You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;//Infinity是一个内置的 全局常量，代表 “无穷大”
    let maxProfit = 0;

    for(let price of prices){// loop all the num of prices
        if(price < minPrice){//任何数字都比无穷大要小.
            minPrice = price;//所以minPrice会一直更新到最小的数字
        }else{
            maxProfit = Math.max(maxProfit,price - minPrice);//Math.max寻找里面最大的数
        }//一直更新maxProfit直到 当前价格-最少价格买入 等于我们最大的利润
    }
    return maxProfit;
};