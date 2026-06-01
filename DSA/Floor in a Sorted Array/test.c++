/*Input: arr[] = [1, 2, 8, 10, 10, 12, 19], x = 5
Output: 1
Explanation: Largest number less than or equal to 5 is 2, whose index is 1.*/


class Solution {
  public:
    int findFloor(vector<int>& arr, int x) {
        // code here
      int st=0, end=arr.size()-1;
      int ans=-1;
      
      while(st<=end){
          
            int mid= st+(end-st)/2;
            
            if(arr[mid]<=x){
                ans=mid;
                st=mid+1;
            }
            else{
                end=mid-1;
                
            }
          
      }
      return ans;
     
    }
};
