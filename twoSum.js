1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();//creat hash table
    
    for(let i = 0 ; i<nums.length ; i++){ // forloot each nums
        const cur = nums[i]; //save the nums
        const need = target - nums[i]; // creat the new box to safe the num we may need 
        if(map.has(need)){// use hash has to see if we have the things we need
            return [map.get(need),i];// if so, we return
        }
        map.set(cur,i);//or return something else 
    }//o(n)
};