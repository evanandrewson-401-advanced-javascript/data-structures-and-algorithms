class Graph {
  constructor() {
    this.nodeList = new Map();
  }

  addNode(value) {
    this.nodeList.set(value, []);
    return this.nodeList.get(value);
  }

  addEdge(node1value, node2value, weight) {
    this.nodeList.get(node1value).push({[node2value]: weight});
    this.nodeList.get(node2value).push({[node1value]: weight});
  }

  getNodes() {
    let nodesArray=[];
    const iterator = this.nodeList.keys();
    for(let key of iterator) {
      nodesArray.push(key);
    }
    return nodesArray;
  }

  getNeighbors(value) {
    return this.nodeList.get(value);
  }

  size() {
    return this.nodeList.size;
  }
}

module.exports = Graph;