# Queue with Stacks
Coding challenge #13

## Challenge
The challenge is to create a function that validates if the brackets in a string are correct.

## Approach & Efficiency 
I used a stack. If the character is an opening bracket, I push it to the stack. If it's the matching closing bracket, I pop off the stack. Then at the end I check if the stack has a top of null and if it does I return true, otherwise we return false.