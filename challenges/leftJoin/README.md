# Reverse an Array
Coding challenge class #33

## Challenge
The challenge is to create a left join method for two hashtables.

## Approach & Efficiency 
The solution uses one loop so it's linear. We first define a results array. We then loop through the left object using a for of loop. If the key in each iteration exists in the right object, we push an array of the key and both values to the results array. Otherwise we push the key with the left value and null to the results array. After the loop, we return the results array.