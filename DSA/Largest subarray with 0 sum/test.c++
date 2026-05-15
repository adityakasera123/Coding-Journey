class Solution {
  public:
    int maxLength(vector<int>& arr) {
        // code here
      unordered_map<int,int>prefix;
      
      int sum=0;
      int maxi=0;
      
      for(int i=0; i<arr.size(); i++){
          
          sum +=arr[i];
          
          if(sum==0){
              maxi=i+1;
          }
          
          if(prefix.find(sum)!=prefix.end()){
              maxi=max(maxi, i-prefix[sum]);
          }
          else{
          prefix[sum]=i;
          }
      }
      return maxi;

    }
};