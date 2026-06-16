class Solution {
  public:
    int findEquilibrium(vector<int> &arr) {
        // code here
        
        int n=arr.size(),left=0,right=0;
        for(int i=0; i<arr.size(); i++){
            right=right+arr[i];
        }
        for(int i=0; i<n; i++){
            right=right-arr[i];
            if(left==right) return i;
            left=left+arr[i];
        }
        return -1;
    }
};