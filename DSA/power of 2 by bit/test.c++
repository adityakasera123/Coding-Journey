class Solution {
  public:
    bool isPowerofTwo(int n) {
        // code here
        int temp=n;
        int count=0;
        while(temp>0){
            if(temp&1){
                count++;
            }
            temp=temp>>1;
        }
        if(count==1){
            return true;
        }
    else{
        return false;
    } 
    }
};