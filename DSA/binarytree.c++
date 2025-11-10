#include <iostream>
using namespace std;


class Node {
public:
    int data;
    Node* left;
    Node* right;

    // Constructor
    Node(int value) {
        data = value;
        left = right = nullptr;
    }
};


class BinaryTree {
public:

    Node* createNode(int value) {
        return new Node(value);
    }


    void inorderTraversal(Node* node) {
        if (node == nullptr)
            return;

        inorderTraversal(node->left);
        cout << node->data << " ";
        inorderTraversal(node->right);
    }


    void postorderTraversal(Node* node) {
        if (node == nullptr)
            return;

        postorderTraversal(node->left);
        postorderTraversal(node->right);
        cout << node->data << " ";
    }
};


int main() {
    BinaryTree tree;


    Node* root = tree.createNode(1);
    root->left = tree.createNode(2);
    root->right = tree.createNode(3);
    root->left->left = tree.createNode(4);
    root->left->right = tree.createNode(5);


    cout << "Inorder Traversal: ";
    tree.inorderTraversal(root);
    cout << endl;

    cout << "Postorder Traversal: ";
    tree.postorderTraversal(root);
    cout << endl;

    return 0;
}
