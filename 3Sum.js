15. 3Sum
Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums.sort((a,b) => a -b);
//输入：nums = [-1,0,1,2,-1,-4]
//第一步排序：[-4, -1, -1, 0, 1, 2]
    const n = nums.length;
    for(let i = 0;i < n -2; i++){//只跑数组的前面数字不包含后面的两位，因为我们要拿到3个数字相加等于0
        const a = nums[i];

        if(a > 0) break;//如果第一位数字就大于0那就不需要继续了，因为排序之后后面的数字更大

        if(i > 0 && a === nums [i-1]) continue;//避免掉相同的数字做计算
        // 如果i的index > 0 并且和i的上一位的数字相等 跳过，
//continue 的作用是：立刻跳过当前这次循环剩下的代码，不执行它，直接进入下一次循环。
        let left = i+1;
        let right = n -1;

        while (left < right){
            const b = nums[left];
            const c = nums[right];
            const sum = a + b + c;

            if (sum === 0){
                res.push([a,b,c]);

                while(left < right && nums[left] === b) left++;//跳过所有和 b 相同的左侧数字，避免重复三元组
                while(left < right && nums[right] === c) right--;// 跳过所有和 c 相同的右侧数字，避免重复三元组
            }else if(sum < 0){//因为数组已经拍过序了 所以如果总数小于0往靠大数字的右边前进一个，
                left ++;
            }else{// 如果总数大于0 就往数字小的左边移动 所以是 -- ；
                right --;
            }
        }
    }
    return res;
};