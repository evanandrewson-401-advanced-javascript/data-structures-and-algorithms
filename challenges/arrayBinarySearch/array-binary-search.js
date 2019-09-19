const binarySearch = (arr, searchTerm) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if( searchTerm === arr[middleIndex]) {
      return middleIndex;
    } else if( searchTerm < arr[middleIndex]) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }
  return -1;
};

module.exports = binarySearch;