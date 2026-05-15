class Solution {
  public:
    // Complete this function
    // Function to check whether there is a subarray present with 0-sum or not.
    bool subArrayExists(vector<int>& arr) {
        // Your code here
      
            
        unordered_set<int>sum;
        
        int prefix_sum=0;
        
    for(int i=0; i<arr.size(); i++){
        prefix_sum += arr[i];
        
        if(prefix_sum==0){
            return true;
        }
        if(sum.find(prefix_sum)!= sum.end()){
            return true;
        }
        
        sum.insert(prefix_sum);
        
    }
    return false;
    
        
    }
};