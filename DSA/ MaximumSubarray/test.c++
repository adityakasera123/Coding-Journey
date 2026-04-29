// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        int maxSum=INT_MIN;
        int currSum=0;

        for(int i=0;i<nums.size(); i++){
            currSum = max(currSum + nums[i], nums[i]);
            maxSum=max(maxSum,currSum);
        }
        return maxSum;
    }
};