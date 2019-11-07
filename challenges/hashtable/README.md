# Reverse an Array
Coding challenge class #30

## Challenge
The challenge is to create a hashtable class with an add, get, hash, and contains method.

## Approach & Efficiency 
For hash, I borrowed Ryan's solution. We get a number by adding together all the charcodes for the string and then getting the modulo based on the size of the array. For add, we first hash the key to find the index of the proper bucket and then push in an array with the key value pair. For get, we find the proper bucket then do a .find to see if the key is in it. Finally, for contains, we do a nested loop to check if the innermost arrays contain the key.