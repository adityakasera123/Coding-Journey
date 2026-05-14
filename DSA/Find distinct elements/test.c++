// User function Template for C++
int distinct(vector<int>& arr) {
 
    unordered_set<int>freq;

    for(int i=0; i<arr.size();i++){
    
     freq.insert(arr[i]);
    }
    
    return freq.size();
}