53. Maximum Subarray
Medium

Given an integer array nums, find the subarray with the largest sum, and return its sum.


Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
 //子数组（Subarray） 是 数组中连续的一部分元素。
//•	子数组里的元素 必须在原数组中是连续的；
//•	不允许跳着选、漏选或打乱顺序。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];// 当前子数组的和
    let maxSum = nums[0]; // 全局最大和

    for(let i = 1; i< nums.length; i++){
        currentSum = Math.max(nums[i],currentSum + nums[i]);//每个循环用当前的数字和之前加的数字在加上当前的数字去对比当前的数字，拿到最大值，
        maxSum = Math.max(maxSum, currentSum);//在用最大值和之前的最大值去对比，拿到相加最大的数值
    }
    return maxSum;