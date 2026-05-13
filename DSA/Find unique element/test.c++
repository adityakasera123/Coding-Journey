class Solution {
  public:
    int findUnique(int k, vector<int>& arr) {
        // code here
        unordered_map<int,int> freq;
        
        for(int i=0; i<arr.size(); i++){
            freq[arr[i]]++;
        }
       
       for(int i=0; i<freq.size();i++){
           if(freq[i]==1){
               return i;
           }
       }
    }
};