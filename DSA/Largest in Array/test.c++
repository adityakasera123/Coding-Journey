class Solution {
  public:
    int largest(int arr[], int n) {
        
          int max=arr[0];
          int min = arr[0];
    for(int i=1; i<n;i++){
        if(arr[i]>max){
            max=arr[i];
        }
            if(arr[i]<min){
                min=arr[i];
            }
    }
    return max;
    }
};
