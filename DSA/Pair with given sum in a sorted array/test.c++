
class Solution {
  public:
    int countPairs(vector<int> &arr, int target) {
        // Complete the function
        int left=0;
        int right=arr.size()-1;
        int count =0;
            // s   e
      while(left<right){
          int sum = arr[left] + arr[right];
          
          if(sum<target){
              left++;
          }
          else if(sum>target){
              right--;
          }
          
          else{
              int ele1=arr[left], ele2=arr[right];
              int c1=0, c2=0;
              
              while(left<=right && arr[left]==ele1){
                  c1++;
                  left++;
              }
              while(left<=right && arr[right]==ele2){
                  c2++;
                  right--;
              }
              
              if(ele1 == ele2) {
                  count=count + c1*(c1-1)/2;
              }
              else{
                  count=count+c1*c2;
              }
          }
          
      }
      
      return count;
      
    }
};