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

class DoubleLinkList {
  init() {
    this.head = new Node("San Francisco");
    this.head.prev = null;
    this.head.next = null;

    let nodeOakland = new Node("Oakland");
    nodeOakland.prev = this.head;
    nodeOakland.next = null;
    this.head.next = nodeOakland;

    let nodeBerkeley = new Node("Berkeley");
    nodeBerkeley.prev = nodeOakland;
    nodeBerkeley.next = null;
    nodeOakland.next = nodeBerkeley;

    this.tail = new Node("Fremont");
    this.tail.prev = nodeBerkeley;
    this.tail.next = null;
    nodeBerkeley.next = this.tail;
    return this.head;
  }

  add(newNode) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
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
    newNode.prev = p;
    newNode.next.prev = newNode;
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
    p.next.prev = p;
    temp.next = null;
    temp.prev = null
  }

  print(node) {
    let p = node;
    let end = null;
    while (p != null) {
      let data = p.getData()
      console.log(`${data} ->`)
      end = p;
      p = p.next;
    }
    console.log('End')

    p = end;
    while (p != null) {
      let data = p.getData();
      console.log(`${data} ->`)
      p = p.prev
    }
    console.log('Start')
  }
}

let doubleLinkList = new DoubleLinkList();
let head = doubleLinkList.init()
doubleLinkList.insert(1, new Node('Walnut'));
doubleLinkList.remove(2)
doubleLinkList.print(head)