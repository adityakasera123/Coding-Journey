class Solution {
  public:
    vector<int> sumClosest(vector<int>& arr, int target) {
        // code here
        
        sort(arr.begin(), arr.end());
        
        int left=0;
        int right=arr.size()-1;
        int bestDiff=INT_MAX;
        int ans1;
        int ans2;
        if(arr.size()<2){
            return {};
        }
        while(left<right){
            int sum=arr[left]+arr[right];
            int diff = abs(target - sum);
            
            if(diff<bestDiff){
                bestDiff=diff;
                ans1=arr[left];
                ans2=arr[right];
    
            }
            if(sum<target){
                left++;
            }
            else if(sum>target){
                right--;
            }
            else{
                return {ans1,ans2};
            }
             
        }
        return {ans1,ans2};
    }
};