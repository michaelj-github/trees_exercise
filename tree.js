/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    if (!this.root) return 0;
    let theSum = this.root.val;
    function recurseIt(node) {
      for (let c of node.children) {
        theSum += c.val;
        if (c.children.length > 0) {
          recurseIt(c);
        }
      }
    }
    recurseIt(this.root);
    return theSum;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    if (!this.root) return 0;
    let theCount = 0;
    function recurseIt(node) {
      for (let c of node.children) {
        if (c.val % 2 === 0) {
          theCount++;
        }
        if (c.children.length > 0) {
          recurseIt(c);
        }
      }
    }
    recurseIt(this.root);
    return theCount;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    if (!this.root) return 0;
    let theCount = this.root.val > lowerBound ? 1 : 0;
    function recurseIt(node) {
      for (let c of node.children) {
        if (c.val > lowerBound) {
          theCount++;
        }
        if (c.children.length > 0) {
          recurseIt(c);
        }
      }
    }
    recurseIt(this.root);
    return theCount;

  }
}

module.exports = { Tree, TreeNode };
