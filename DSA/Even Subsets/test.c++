class Solution {
  public:
    int countSumSubsets(int arr[], int N) {


        int count=0;

        for(int mask=1; mask<(1<<N); mask++){

            int sum=0;

            for(int i=0; i<N; i++){
                if(mask&(1<<i)){
                    sum=sum+arr[i];
                }

            }
            if(sum%2==0){
                count++;
            }
        }
        return count;
    }
};