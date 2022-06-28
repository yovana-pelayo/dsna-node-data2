class BinaryTree2 {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor(val) {
    this.root = new BinaryTreeNode(val);
  }
  insert(val) {
    const newNode = new BinaryTreeNode(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(current, newNode) {
    if (newNode.val < current.val) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (current.right === null) {
        current.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
