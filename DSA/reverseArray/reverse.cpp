#include <iostream>
#include <vector>
using namespace std;

class Solution {
  public:
    void reverseArray(vector<int> &arr) {
        int start = 0;
        int end = arr.size() - 1;

        while(start < end) {
            swap(arr[start], arr[end]);
            start++;
            end--;
        }
    }
};    /// Time Complexity: O(N) where N is the size of the array
     /// Space Complexity: O(1) as we are reversing the array in place  
     /// line 5 to 17 is the main code on reversing the array of gfg

int main() {
    vector<int> arr = {1, 2, 3, 4, 5};

    Solution obj;
    obj.reverseArray(arr);

    // print array
    for(int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }

    return 0;
}