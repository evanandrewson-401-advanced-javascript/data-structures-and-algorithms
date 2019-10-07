class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {
    // let result = [];

  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }
  add(value) {
    const node = new TreeNode(value);
    if(!this.root) {
      this.root = node;
    } else if(node.value < this.root.value) {
      if(this.root.left === null) {
        this.root.left = node;
      } else {
        this.root.left.add(node);
      }
    } else if(node.value > this.root.value) {
      if(this.root.right === null) {
        this.root.right = node;
      } else {
        this.root.right.add(node);
      }
    } else {
      throw new Error('node with that value already exists');
    }
  }
}

module.exports = { TreeNode, BinaryTree, BinarySearchTree };