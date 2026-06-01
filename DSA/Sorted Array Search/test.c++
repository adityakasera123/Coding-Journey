//Input: arr[] = [1, 2, 3, 4, 6], k = 6
//Output: true

class Solution {
  public:
    bool binarySearch(vector<int>& arr, int k) {
        // code here
        
        int st=0, end=arr.size()-1;
        while(st<=end){
           int  mid = st + (end-st)/2;
            
            if(k>arr[mid]){
                st=mid+1;
            }
            else if(k<arr[mid]){
                end=mid-1;
            }
            else{
                return true;
            }
        }
        return false;
    }
};