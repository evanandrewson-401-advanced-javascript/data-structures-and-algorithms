const insertShiftArray = (arr, value) => {
    for(let i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i];
    }
    arr[0] = value;
    return arr;
}

module.exports = insertShiftArray;