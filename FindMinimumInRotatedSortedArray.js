153. Find Minimum in Rotated Sorted Array
Medium


Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

//这个题目本来可以用简单的forloop找到最小的值 但是因为题目要求 O(log n) 的时间算法去得出答案，但是普通的 for 循环解法时间复杂度 O(n)，不符合题目要求。

/**	1.	设 left=0, right=n-1
	2.	mid = floor((left + right) / 2)
	3.	若 nums[mid] > nums[right] → left = mid + 1
	否则 → right = mid
	4.	循环到 left === right，返回 nums[left]
**/




/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;//设定起始值为0；
    let right = nums.length -1;//等于长度的数字-1；

    while(left < right){//第一步0肯定小于长度，除非nums的长度为0
        const mid = Math.floor((left + right) / 2);//算出第一步0加上长度的数字除以2等于中间值index
        //向下取整，把小数变成最近的不大于它的整数，保证 mid 是合法的数组下标（整数）。
        //floor是给出一个整数值，如除以的数是4.5，即得出4
        if(nums[mid] > nums[right]){//如果中间值的数字 > 最后一个数字
            left = mid +1;//左边的数字变成中间位置的后面一位在去算大小
        }else{
            right = mid;//如果mid < 右边的数字,就把右边的数字变成中间值在重新比大小
        }//直到最后left的数字比right的小 我们退出循环 得到最小的left
    }
    return nums[left];
};


