class Solution {
  public:
    int findSubarray(vector<int> &arr) {
     
    unordered_map<int,int>prefix;

    int sum=0;
    int count=0;

    prefix[0]=1;

    for(int i=0; i<arr.size(); i++){
        sum+=arr[i];

        if(prefix.find(sum)!=prefix.end()){
            count=count+prefix[sum];
        }
        
        prefix[sum]++;
    }
    return count;

     
     
     
        // code here.
    }
};