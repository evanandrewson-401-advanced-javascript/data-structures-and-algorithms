const leftJoin = (obj1, obj2) => {
  const results = [];
  for( let [key, value] of Object.entries(obj1)) {
    if(obj2[key]) {
      results.push([key, value, obj2[key]]);
    } else {
      results.push([key, value,null]);
    }
  }
  return results;
};

module.exports = leftJoin;