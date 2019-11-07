# Reverse an Array
Code Challenge: Class 32

## Challenge
The challenge is to create a function that returns the intersection of two binary search trees.

## Approach & Efficiency 
The solution unfortunately uses a nested loop, so it's quadratic. First we traverse each tree to get an array of their values. We then loop through the first tree and compare each value to the second tree using a nested loop. If the values are equal, we push to a result array. Finally we return the sorted results array.