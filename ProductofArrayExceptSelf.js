Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = new Array(n);// 建一个空盒子 ans，用来装结果。

    ans[0] = 1 ; // 乘法的初始值 
    for (let i = 1; i <n ; i++){
        ans[i] = ans[i-1] * nums[i-1];
    }

    let right =1;
    for(let i = n- 1; i>= 0; i--){
        ans[i] *= right; //① 把“右边所有数的乘积”乘进来
        right *= nums[i];// ② 更新 right：把当前这个数并入，留给左边下一格用
    }
    return ans;
};





//① ans[i] *= right（得到“除自己外”临时结果）

//② right *= nums[i]（更新给下一格左边用）





//总结 ：mid的这个题目 有点难 