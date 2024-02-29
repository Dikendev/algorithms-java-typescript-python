class Node {
  constructor(data, prev, next) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }

  getData() {
    return this.data;
  }
}

class DoubleCircleLink {
  init() {
    this.head = new Node("A")
    this.head.next = null;
    this.head.prev = null;

    let nodeB = new Node("B");
    nodeB.next = null;
    nodeB.prev = this.head
    this.head.next = nodeB

    let nodeC = new Node("C")
    nodeC.next = null;
    nodeC.prev = nodeB;
    nodeB.next = nodeC

    this.tail = new Node("D")
    this.tail.next = this.head
    this.tail.prev = nodeC
    nodeC.next = this.tail
    this.head.prev = this.tail
  }

  print() {
    let p = this.head;
    do {
      let data = p.getData();
      console.log(data);
      p = p.next
    } while (p != this.head);
    let data = p.getData();
    console.log(data);

    p = this.tail;
    do {
      data = p.getData();
      console.log(data);
      p = p.prev;
    } while (p != this.tail);

    data = p.getData()
    console.log(data)
  }
}

const doubleCircleLink = new DoubleCircleLink()
doubleCircleLink.init()
doubleCircleLink.print()