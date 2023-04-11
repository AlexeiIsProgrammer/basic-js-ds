const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.head = null
  }

  root() {
    return this.head
  }

  add(value) {

    this.head = addNode(this.head, value)

    function addNode (node, value) {
      if(!node) {
        return new Node(value)
      }

      if(node.data === value)
        return node

      if(value < node.data) {
        node.left = addNode(node.left, value)
      } else {
        node.right = addNode(node.right, value)
      }

      return node
    }

    return this
  }

  has(value) {
    return isHas(this.head, value)

    function isHas (node, value) {
      if(!node)
        return false

      if(node.data === value)
        return true

      if(value < node.data) {
        return isHas(node.left, value)
      } else {
        return isHas(node.right, value)
      }
    }
  }

  find(value) {
    return isHas(this.head, value)

    function isHas (node, value) {
      if(!node)
        return null

      if(node.data === value) {
        return node
      }

      if(value < node.data) {
        return isHas(node.left, value)
      } else {
        return isHas(node.right, value)
      }
    }
  }

  remove(value) {
    this.head = removeNode(this.head, value)

    function removeNode (node, value) {
      if(!node)
        return null

      if(value < node.data) {
        node.left = removeNode(node.left, value)
        return node
      } else if (value > node.data) {
        node.right = removeNode(node.right, value)
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        }

        if(!node.left) {
          node = node.right
          return node
        }

        if(!node.right) {
          node = node.left
          return node
        }

        let minimumFromRightBranch = node.right
        while(minimumFromRightBranch.left) {
          minimumFromRightBranch = minimumFromRightBranch.left 
        }

        node.data = minimumFromRightBranch.data
        node.right = removeNode(node.right, minimumFromRightBranch.data)

        return node
      }
    }

    return this
  }

  min() {
    if(!this.head) 
      return null

    let node = this.head

    while(node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    if(!this.head) 
      return null

    let node = this.head

    while(node.right) {
      node = node.right
    }

    return node.data
  }
}

module.exports = {
  BinarySearchTree
};