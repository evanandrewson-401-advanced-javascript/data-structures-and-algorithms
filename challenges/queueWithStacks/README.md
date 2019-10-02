# Queue with Stacks
Coding challenge #11

## Challenge
The challenge is to create a pseudoqueue class with enqueue and dequeue methods. The pseudoqueue class should utilize two stacks.

## Approach & Efficiency 
To enqueue, I first added the value to the inStack then added the values to the end of the outStack to maintain first-in first-out. For dequeuing, I simply popped the value off of the outStack.