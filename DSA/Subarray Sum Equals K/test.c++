#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int subarraySum(vector<int>& nums, int k) {
    
    // Prefix sum frequency store karega
    unordered_map<int,int> freq;

    int count = 0;
    int sum = 0;

    // Starting case
    freq[0] = 1;

    // Array traverse
    for(int i = 0; i < nums.size(); i++) {

        // Running sum
        sum = sum + nums[i];

        // Check if sum-k pehle mila
        if(freq.find(sum - k) != freq.end()) {
            count = count + freq[sum - k];
        }

        // Current sum store/update
        freq[sum]++;
    }

    return count;
}

int main() {

    vector<int> nums = {1,2,3};
    int k = 3;

    cout << subarraySum(nums, k);

    return 0;
}