Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109



/** // 暴力解发
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    for(let i = 0; i < nums.length -1; i++ ){// don't have to loop the last nums so lenhth -1 
        for(let j = i+1 ; j < nums.length; j++ ){
            if (nums[i] === nums[j]){
                return true;
            }
        }// if have the same nums then return true, else end the of the loop and retuen false
    }
    return false;//// 全部循环结束，说明没重复
};


/** 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length ;
};// new Set(nums)：把数组变成一个集合。集合的规则是：只保留不重复的值。
//.size：集合里有多少个不同的值.
// 如果不重复的数字 不等于 nums的长度 ，那就是有重复的，那就return false

//复杂度
//•	时间：O(n)（把每个元素插入 Set 一次）
//•	空间：O(n)（最坏情况下全都不同，Set 存下 n 个）





//总结 ： 第一个解法是自己想出来的 ，但是语法上出现一些问题找chat完成的，第二个最优解是chat给我的，了解到还有Set这个可以运用 ，给了我一些不同的思路



