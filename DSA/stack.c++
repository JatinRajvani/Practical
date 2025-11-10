#include <iostream>
using namespace std;

class Stack {
    int max = 5;
    int rear = -1;
    int arr[5]; 

public:
    void push(int val) {
        if (rear == max - 1) {
            cout << "Stack Overflow " << val << endl;
        } else {
            arr[++rear] = val;
            cout << val << " pushed into stack.\n";
        }
    }

    void pop() {
        if (rear == -1) {
            cout << "Stack Underflow! No element to pop.\n";
        } else {
            cout << arr[rear--] << " popped from stack.\n";
        }
    }

    void display() {
        if (rear == -1) {
            cout << "Stack is empty.\n";
            return;
        }
        cout << "Stack elements ";
        for (int i = rear; i >= 0; i--) {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    s.display();

    s.pop();
    s.display();
    return 0;
}
