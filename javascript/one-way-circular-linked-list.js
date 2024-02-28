class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  getData() {
    return this.data;
  }
}

class SingleCircleLink {
  init() {
    this.head = new Node("A");
    this.head.next = null;

    let nodeB = new Node("B");
    nodeB.next = null;
    this.head.next = nodeB;

    let nodeC = new Node("C")
    nodeC.next = null;
    nodeB.next = nodeC;

    //the last node called tail node
    this.tail = new Node("D");
    this.tail.next = this.head;
    nodeC.next = this.tail;
  }

  insert(insertPosition, newNode) {
    let p = this.head;
    let i = 0;
    while (p.next != null && i < insertPosition - 1) {
      p = p.next;
      i++;
    }
    newNode.next = p.next;
    p.next = newNode;
  }

  remove(removePosition) {
    let p = this.head;
    let i = 0;
    while (p.next != null && i < removePosition - 1) {
      p = p.next;
      i++;
    }
    let temp = p.next;
    p.next = p.next.next;
    temp.next = null;
  }

  print() {
    let p = this.head
    do {
      let data = p.getData()
      console.log(`${data}`)
      p = p.next
    } while (p != this.head)
    let data = p.getData()
    console.log(data)
  }
}

const singleCircleLink = new SingleCircleLink()
const head = singleCircleLink.init()
singleCircleLink.insert(2, new Node("E"))
singleCircleLink.remove(3)
singleCircleLink.print(head)

