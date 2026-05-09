// User function template for C++
class Solution {
  public:

    long long int findBitwiseOR(long long int L, long long int R) {
        // complete the function here
        
       int ans=0;
       for(int i=L; i<=R; i++){
           ans = ans|i;
       }
       return ans;
    }
};