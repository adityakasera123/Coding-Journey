class Solution {
  public:
    vector<int> rangeSumQueries(vector<int>& arr, vector<vector<int>>& queries) {
        int n = arr.size();

        vector<int> prefix(n+1);
        prefix[0] = 0;

        for(int i = 0; i < n; i++){
            prefix[i+1] = prefix[i] + arr[i];
        }

        vector<int> ans;

        for(auto q : queries){
            int l = q[0];
            int r = q[1];

            int sum = prefix[r+1] - prefix[l];
            ans.push_back(sum);
        }

        return ans;
    }
};