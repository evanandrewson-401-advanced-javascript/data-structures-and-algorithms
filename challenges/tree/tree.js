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