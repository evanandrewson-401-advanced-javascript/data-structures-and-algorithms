class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = node || null;
    this.traversalArray = [];
  }
  preOrder(root) {
    if(root !==null) {
      this.traversalArray.push(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
    return this.traversalArray;
  }
  inOrder(root) {
    if(root !==null) {
      this.inOrder(root.left);
      this.traversalArray.push(root.value);
      this.inOrder(root.right);
    }
    return this.traversalArray;
  }
  postOrder(root) {
    if(root !==null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      this.traversalArray.push(root.value);
    }
    return this.traversalArray;
  }
  breadthFirst(root) {
    if(root === null) {
      return;
    }
    const queue = [];
    queue.push(root);
    while(queue.length > 0) {
      const currentNode = queue[0];
      if(currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if(currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      this.traversalArray.push(currentNode.value);
      queue.shift();
    }
    return this.traversalArray;
  }
  findMaximumValue(root) {
    if(!this.traversalArray[0]) {
      this.traversalArray.push(root.value);
    }
    if(root.value > this.traversalArray[0]) {
      this.traversalArray[0] = root.value;
    }
    if(root.left !== null) {
      this.findMaximumValue(root.left);
    }
    if(root.right !== null) {
      this.findMaximumValue(root.right);
    }
    return this.traversalArray[0];
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }
  add(value) {
    const newNode = new TreeNode(value);
    if(!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if(newNode.value < node.value) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else if(newNode.value > node.value) {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else {
      throw new Error('node with that value already exists');
    }
  }
}

module.exports = { TreeNode, BinaryTree, BinarySearchTree };