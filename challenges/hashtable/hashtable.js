class Hashtable {
  constructor(buckets) {
    this.arr = new Array(buckets).fill([]);
  }

  hash(key) {
    return key.split('').reduce((acc, letter, i) => 
      acc += letter.charCodeAt(0) + i, 0)
    % this.arr.length;
  }

  add(key, value) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    bucket.push([key, value]);
    console.log(this.arr);
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.arr[index];
    const pair = bucket.find(([storedKey]) => storedKey === key);
    if(pair) {
      return pair[1];
    } else {
      return null;
    }
  }

  contains(key) {
    const booleanArray= [];
    this.arr.forEach(bucket => {
      bucket.map(keyValue => {
        booleanArray.push(keyValue.includes(key));
      });
    });
    return booleanArray.includes(true);
  }
}

module.exports = { Hashtable };