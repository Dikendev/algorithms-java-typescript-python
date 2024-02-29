class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  getData() {
    return this.data;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(element) {
    if (this.top == null) {
      this.top = new Node(element);
    } else {
      let newNode = new Node(element);
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++
  }

  pop() {
    if (this.top == null) {
      return null;
    }

    let p = this.top;
    this.top = this.top.next;
    p.next = null;

    this.size--
    return p
  }

  size() {
    return this.size;
  }
}

function print(stack) {
  console.log('TOP')
  let node = null;
  while ((node = stack.pop()) != null) {
    console.log(node.getData())
  }
  console.log("END")
}

let stack = new Stack()
stack.push("A")
stack.push("B")
stack.push("C")
stack.push("D")
stack.pop()
print(stack)
