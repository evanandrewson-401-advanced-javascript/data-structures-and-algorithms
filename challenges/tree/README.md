# Queue with Stacks
Coding challenge #15 and #17

## Challenge
The challenge is to create a binary search tree class with an add function and functions for preorder, inorder, and postorder traversal. Challenge 17 is to crete a function for breadth first traversal

## Approach & Efficiency 
To add, I checked if the tree already had a node or whether the new value was less than or greater than the node and added accordingly. For traversal, I used recursive functions to push to a traversal array in the correct order. For breadth first, I used a queue to ensure the nodes were added to the traversal array in the correct order.