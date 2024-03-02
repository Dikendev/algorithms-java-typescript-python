
class BinaryTree {
  getRoot() {
    return this.getRoot;
  }

  inOrder(root) {
    console.log(22)
    if (root == null) {
      return;
    }

    this.inOrder(root.left);
    console.log(root.getData());
    this.inOrder(root.right);
  }

  insert(node, newData) {
    if (this.root == null) {
      this.root = new Node(newData, null, null)
      return;
    }

    let compareValue = newData - node.getData();
    if (compareValue < 0) {
      if (node.left == null) {
        node.left = new Node(newData, null, null)
      } else {
        this.inOrder(node.left, newData)
      }
    } else if (compareValue > 0) {
      if (node.right == null) {
        node.right = new Node(newData, null, null)
      } else {
        this.insert(node.right, newData)
      }
    }
  }
}
let binaryTree = new BinaryTree()
binaryTree.insert(binaryTree.getRoot(), 60)
console.log(`in order traversal binary search tree`)
binaryTree.inOrder(binaryTree.getRoot())