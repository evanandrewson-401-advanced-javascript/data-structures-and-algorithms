# Queue with Stacks
Coding challenge #12

## Challenge
The challenge is to create a animal shelter class with enqueue and dequeue(pref) methods.

## Approach & Efficiency 
To enqueue, I copied the functionality of my Queue class. For dequeuing, I looped through the list until I came upon the first value that matched the parameter. I then reset the node before it to have the next value of that matching node, then returned the matching node's value.