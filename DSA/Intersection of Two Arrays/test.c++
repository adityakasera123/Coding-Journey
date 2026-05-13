

class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        
        unordered_set<int> firstArray;
        unordered_set<int> result;

        for(int i=0; i<nums1.size(); i++){
            firstArray.insert(nums1[i]);
        }


        for(int i=0; i<nums2.size(); i++){

            if(firstArray.find(nums2[i])!= firstArray.end()){
                result.insert(nums2[i]);
            }
        }

        vector<int>ans(result.begin(),result.end());
        return ans;
     

    }
};