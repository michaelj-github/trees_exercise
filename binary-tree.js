/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    if (!this.root) return 0;

    function recurseIt(node) {
      if (!node.left && !node.right) return 1;
      if (!node.left) return recurseIt(node.right) + 1;
      if (!node.right) return recurseIt(node.left) + 1;
      // if(recurseIt(node.left) < recurseIt(node.right)) {
      //   return recurseIt(node.left) + 1
      // } else {
      //   return recurseIt(node.right) + 1
      // }
      return (Math.min(recurseIt(node.left), recurseIt(node.right)) + 1)
    }

    return recurseIt(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if (!this.root) return 0;

    function recurseIt(node) {
      if (!node.left && !node.right) return 1;
      if (!node.left) return recurseIt(node.right) + 1;
      if (!node.right) return recurseIt(node.left) + 1;
      return (Math.max(recurseIt(node.left), recurseIt(node.right)) + 1)
    }

    return recurseIt(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let theMaxSum = 0;
    
    function recurseIt(node) {
      if (!node) return 0;
      const leftSum = recurseIt(node.left);
      const rightSum = recurseIt(node.right);
      theMaxSum = Math.max(theMaxSum, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);

    }

    recurseIt(this.root);
    return theMaxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists.
   * I was not even close on this one :( */

  nextLarger(lowerBound) {

    if (!this.root) return null;


    let thisQueue = [this.root];
    let closest = null;

    while (thisQueue.length) {
      let currentNode = thisQueue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (currentNode.left) thisQueue.push(currentNode.left);
      if (currentNode.right) thisQueue.push(currentNode.right);
    }

    return closest;

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
