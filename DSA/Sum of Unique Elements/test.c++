class Solution {
public:
    int sumOfUnique(vector<int>& nums) {
        
        unordered_map<int,int> freq;

        int add=0;

        for(int i=0; i<nums.size(); i++){
            freq[nums[i]]++;
        }

        for(auto number:freq){
            if(number.second==1){
                add=add+number.first;
            }
        }
        return add;
    }
    
};