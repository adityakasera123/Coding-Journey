class Solution {
public:
    int findPairs(vector<int>& nums, int k) {
        unordered_set<int>freq;

        int count=0;

        if(k==0){

            unordered_map<int,int>freq;

            for(int i=0; i<nums.size(); i++){
                freq[nums[i]]++;
            }

            for(auto x:freq){
                if(x.second>=2){
                    count++;
                }
            }
        }
        
        else{

        unordered_set<int>end;

            for(int i=0; i<nums.size(); i++){
                end.insert(nums[i]);
            }


        for(auto x:end){
           if(end.find(x+k)!=end.end()){
            count++;
           }
         }
        }
        return count;
    }
};