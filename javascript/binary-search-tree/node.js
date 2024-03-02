export class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right
  }

  getData() {
    return this.data;
  }
}