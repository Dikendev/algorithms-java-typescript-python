
/* 
  unidirectional linked list:
  is a chained storage structure of a linear table, which is connected by a node. Each node consists of data and next pointer to the next node.
  */
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }

  getData() {
    return this.data;
  }
}

class LinkedList {
  init() {
    this.head = new Node("San Francisco", null)

    let nodeOakland = new Node("Oakland", null);
    this.head.next = nodeOakland;

    let nodeBerkeley = new Node("Berkeley", null);
    nodeOakland.next = nodeBerkeley

    // the last node called tail node
    this.tail = new Node("Fremont", null);
    nodeBerkeley.next = this.tail;

    return this.head;
  }

  add(newNode) {
    this.tail.next = newNode;
    this.tail = newNode;
  }

  insert(insertPosition, newNode) {
    let p = this.head;
    let i = 0;
    while (p.next != null && i < insertPosition - 1) {
      p = p.next;
      i++
    }
    newNode.next = p.next;
    p.next = newNode
  }

  print(node) {
    let p = node;

    while (p != null) {
      let data = p.getData();
      console.log(`${data} + ->`);
      p = p.next;
    };
    console.log(`End`)
  }
}

const linkedList = new LinkedList()
const head = linkedList.init()

linkedList.add(new Node("Walnut", null))
linkedList.insert(2, new Node("Walnut", null))

linkedList.print(head)