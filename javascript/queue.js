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

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  offer(element) {

    if (this.head === null) {
      this.head = new Node(element);
      this.tail = this.head;
    } else {
      let newNode = new Node(element);
      newNode.next = this.tail;
      this.tail.prev = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  poll() {
    let p = this.head;
    if (p == null) {
      return null;
    }

    this.head = this.head.prev;
    p.next = null;
    p.prev = null;
    this.size--;
    return p;
  }

  size() {
    return this.size;
  }
}

function print(queue) {
  console.log('Head')
  let node = null
  while ((node = queue.poll()) != null) {
    console.log(`${node.getData()}`)
  }
  console.log('Tail')
}

let queue = new Queue()
queue.offer('A')
queue.offer('B')
queue.offer('C')
queue.offer('D')
queue.poll()
print(queue)
