class Solution {
public:
    bool isPerfectSquare(int num) {
        int st=1, end=num;

        int ans=0;

        while(st<=end){
            int mid = st + (end-st)/2;

                if(mid<=num/mid){
                    ans=mid;
                    st=mid+1;
                }
                else{
                    end=mid-1;
                }

        }
        if(num==(ans*ans)){
            return true;
        }
        else{
            return false;
        }

    }
};