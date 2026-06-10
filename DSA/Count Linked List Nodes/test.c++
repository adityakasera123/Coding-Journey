class Solution {
  public:
    int getCount(Node* head) {
        // Code here
        int count =0;
        
        Node* temp = head;
        
        while(temp!= NULL){
            count++;
            temp = temp->next;
        }
        return count;
    }
};