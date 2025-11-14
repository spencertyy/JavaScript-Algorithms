11. Container With Most Water
Medium

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

你要从这些竖线里选两根，它们和 x 轴一起构成一个“水桶”（长方形容器），装水，问最多能装多少水。

规则：
	•	只能垂直放着，不能倾斜；
	•	水面高度由两根线中较矮的那根决定；
	•	两根线之间的 水平距离 × 较矮高度 = 能装的水面积。
举例：
如果选了下标 i 和 j 两根线（i < j）：
	•	宽度：width = j - i
	•	高度：h = min(height[i], height[j])
	•	面积：area = width * h

你要在所有 (i,j) 中找到一个 最大 area。





/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let maxArea = 0;

    while (left < right){
        const h = Math.min(height[left],height[right]);//当前桶的高度，找左边右边最小的，因为高的部分cover不了矮的地方
        const width = right - left;//宽度等于右边长度的位置减去左边的位置等于他的宽度
        const area = h * width; // 当前能装进去的水，用高度乘以宽度
        if(area > maxArea){
            maxArea = area; //更新最大值
        }
            // 移动较短的那一根，去对比之前得到的maxArea直到拿到最大的maxArea！
        if(height[left]< height[right]){
            left ++;
        }else{
            right--;
        }
    }
    return maxArea;
};