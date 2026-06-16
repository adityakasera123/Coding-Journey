class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char,int>freq;

            for(int i=0; i<magazine.size();i++){
                freq[magazine[i]]++;
            }

            for(int i=0; i<ransomNote.size();i++){

                char ch=ransomNote[i];

                    if(freq[ch]==0){
                        return false;
                    }
                    freq[ch]--;
            }
            return true;
    }
};