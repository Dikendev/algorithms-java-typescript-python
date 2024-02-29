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

}