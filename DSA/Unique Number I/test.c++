// Input: arr[] = [1, 2, 1, 5, 5]
 // Output: 2

class Solution {
  public:
    int findUnique(vector<int> &arr) {
        // code here
       int ans=0;
       for (int i=0; i<arr.size();i++){
           ans=ans^arr[i];
       }
       return ans;
    }
};