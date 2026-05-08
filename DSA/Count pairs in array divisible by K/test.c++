// User function Template for C++

class Solution {
  public:
    long long countKdivPairs(int A[], int n, int K) {
        // code here
         unordered_map<int, int> freq;
        
        long long count = 0;
        
        
        for(int i = 0; i < n; i++) {
            
            // Current remainder
            int rem = A[i] % K;
            
            
            // Needed partner remainder
            int partner = (K - rem) % K;
            
            
            // Add previous matching partners
            count += freq[partner];
            
            
            // Store current remainder
            freq[rem]++;
        }
        
        
        return count;
    }
};
