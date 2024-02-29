class node {
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
    if (this.top === null) {
      return null
    }

    let p = this.top
    this.top = this.top.next
    p.next = null;

    this.size--
    return p
  }
}
