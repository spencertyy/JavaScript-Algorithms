152. Maximum Product Subarray

Medium

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Note that the product of an array with a single element is the value of that element.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = nums[0];//当前结尾时的最大乘积（可能成为最终答案）
    let minProd = nums[0];//当前结尾时的最小乘积（如果再遇到负数，它可能变最大）
    let ans = nums[0];//全局最大值

    for(let i = 1; i < nums.length; i++){
        const x = nums[i];
        if(x<0){// 如果当前的x<0 就得把最大的数字换成最小的数字来想乘 如果不小于，跳过这一步
            const tmp = maxProd;
            maxProd = minProd;
            minProd = tmp;
        }//如果x是负数 负负想乘可能会变成正数 数字会更大，所以最小的数字替换成最大的
        maxProd = Math.max(x, maxProd * x);
        minProd = Math.min(x, minProd * x);
        ans = Math.max(ans, maxProd);
    }
    return ans;
};