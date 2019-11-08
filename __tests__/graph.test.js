const Graph = require('../challenges/graph/graph');

describe('Graph class', () => {
  it('successfully adds a node to the graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    expect(graph.nodeList.has('a')).toBeTruthy();
  });

  it('successfully adds an edge to the graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    graph.addEdge('a', 'b', 1);
    expect(graph.nodeList.get('a')).toEqual([{b: 1}]);
    expect(graph.nodeList.get('b')).toEqual([{a: 1}]);
  });

  it('successfully gets all the nodes in a graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    expect(graph.getNodes()).toEqual(['a', 'b']);
  });

  it('gets the neighbors of a node with the weight of their edge', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    graph.addEdge('a', 'b', 1);
    expect(graph.getNeighbors('a')).toEqual([{ b: 1 }]);
  });

  it('gets the size of a graph', () => {
    const graph = new Graph();
    graph.addNode('a');
    graph.addNode('b');
    expect(graph.size()).toBe(2);
  }); 
});