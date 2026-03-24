class Solution {
  public:
   
vector<int> getMinMax(vector<int>& arr) {
    
    int max=arr[0];
    int min = arr[0];
    
    for(int i=1; i<arr.size();i++){
        if(arr[i]>max){
            max=arr[i];
        }
        else if(arr[i]<min){
            min=arr[i];
        }
    }
    
    
    return {min,max};
}
};