// User function template for C++
class Solution {
  public:
    bool isDivisible(string& s) {
        // code here
        int ans=0;
        
        for(int i=0; i<s.length(); i++){
            ans = (ans * 2 + (s[i] - '0'))%3;
        }
        
        return ans == 0;
   
    }
};