class Solution {
  public:
    vector<int> singleNum(vector<int>& arr) {
        // Code here.

                //  Input: arr[] = [1, 2, 3, 2, 1, 4]
                // Output: [3, 4].  


         int x=0;

         for (int i=0; i<arr.size(); i++){
                x=x^arr[i];
         }


         int bit = x & (-x);

         int g1=0;  // 1
         int g2=0;  // 0

         for(int i=0; i<arr.size(); i++){
                if(arr[i]&bit){
                    g1=g1^arr[i];
                }
                else {
                    g2=g2^arr[i];
                }

                if(g1<g2) return {g1,g2};
                else return {g2,g1};

         }
    }

};