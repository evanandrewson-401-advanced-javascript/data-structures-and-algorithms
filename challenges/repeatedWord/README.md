# Reverse an Array
Coding challenge class #31

## Challenge
The challenge is to create a function that returns the first repeating word in a string.

## Approach & Efficiency 
The solution uses one loop so it's linear. First I strip the punctuation out of the string using .replace, then I .split the string into an array of words. I then loop through the array and if it's the first occurrence of the word, I add it to a library variable. If it's the second occurrence of the word, I break out of the loop and then return that word.