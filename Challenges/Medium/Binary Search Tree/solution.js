class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(node) {
    let current = this.root
    let parent = current
    if (!current) {
      this.root = node
      return
    }
  
    while (current) {
      parent = current
      if (node.data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    if (node.data < parent.data) {
      parent.left = node
    } else {
      parent.right = node
    }
  }

  preOrder(node = this.root) {
    if (node === null) {
      return ''
    }
  
    let result = `${node.data} `
    result += this.preOrder(node.left)
    result += this.preOrder(node.right)
    return result
  }
}


function binarySearchTree(array) {
  const tree = new BST()
  array.forEach(e => tree.insert(new Node(e)))
  return tree.preOrder()
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]))
// => "8 3 1 6 4 7 10 14 13"
