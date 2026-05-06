class Solution {
  public:
    // arr[] is the array
    long long int product(vector<int> &arr) {
       
                                    // 1,2,3,4 = 24 ans hai but large number ko chota
                                    // karne ke liye modulo lagana hoga jo m=? hoga 


        long long ans =1;
        int mod =1000000007;

        for(int i=0; i<arr.size(); i++){
            ans=ans*arr[i]%mod;
        }

        return ans;
    }

};