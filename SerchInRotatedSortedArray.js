33. Search in Rotated Sorted Array
Medium

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

 /**
  * 设 left = 0, right = n - 1：
	1.	循环条件：while (left <= right)
	2.	计算中点：mid = Math.floor((left + right) / 2)
	3.	如果 nums[mid] === target，直接返回 mid（找到）
	4.	判断哪一半有序：
	•	左半有序（nums[left] <= nums[mid]）：
	•	若 nums[left] <= target < nums[mid]，说明 target 在左半 → right = mid - 1
	•	否则 left = mid + 1
	•	右半有序（否则）：
	•	若 nums[mid] < target <= nums[right]，说明 target 在右半 → left = mid + 1
	•	否则 right = mid - 1
	5.	跳出循环还没返回 → 返回 -1（数组中不存在 target）
	*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right =num.length -1;

    while (left <= right){
        const mid = Math.floor((left + right)/2);
        if (num[mid] === target) return mid;

         // 判断哪一半是有序的
        if(nums[left] <= nums[mid]){
           // 左半有序
            if(nums[left] <= target && target < nums[mid]){
                right = mid -1; // 目标在左半
            }else{
                left = mid +1; // 目标在右半
            }
        }else{
            if(nums[mid] < target && target <= nums[right]){
                left = mid + 1;// 目标在右半
            }else{
                right = mid - 1;//目标在左半
            }
        }
    }
    return -1;//不存在
};