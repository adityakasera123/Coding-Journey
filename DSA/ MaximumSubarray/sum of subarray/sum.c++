class solution{
    public:
    int subarraySum(vector<int>& arr) {

        int total = 0;
        int n=arr.size();

        for(int i=0; i<n; i++){
            total += (i+1) * (n-1) * arr[i];
        }
        return total;
    }
};