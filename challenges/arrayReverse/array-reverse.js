const arrayReverse = function(array) {
    let newArray = array;
    for(let i = newArray.length - 1; i >= (newArray.length -1) / 2; i--) {
        let towardsEnd = newArray[i];
        let towardsBeginning = newArray[array.length - 1 - i];
        newArray[i] = towardsBeginning;
        newArray[array.length - 1 - i] = towardsEnd;

    }
    return newArray;
}