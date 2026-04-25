class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
       
        // 2,3,5,6,7
        //2,5,10,16,23
        int n=nums.size();
        for(int i=1; i<n; i++){
            nums[i]=nums[i]+nums[i-1];
        }
        return nums;
    }
};