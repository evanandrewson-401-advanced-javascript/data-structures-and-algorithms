const treeIntersection = (firstTree, secondTree) => {
  const firstTreeArray = firstTree.preOrder(firstTree.root);
  const secondTreeArray = secondTree.preOrder(secondTree.root);
  const resultArray = [];

  firstTreeArray.forEach(i => {
    secondTreeArray.forEach(j => {
      if(i === j) {
        resultArray.push(i);
      }
    });
  });
  return resultArray.sort();
};

module.exports = treeIntersection;
