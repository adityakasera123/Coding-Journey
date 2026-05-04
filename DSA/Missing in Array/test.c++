class Solution {
  public:
    int missingNum(vector<int>& arr) {
        
        int n=arr.size()+1;
        int ogSum=0;

        int exSum=0;
        for(int i=1; i<=n; i++){
            ogSum=ogSum+i;
        }
        for(int i=0; i<arr.size(); i++){
           exSum=exSum+arr[i];
        }
        return ogSum-exSum;
        
    }
};