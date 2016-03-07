"use strict";

class Node {
  constructor(data) {
    this.payload = data;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  add(node) {
    this.head = node;
  }
}

const l = new Node("stuff");
const m = new Node("things");
const n = new List;
n.add(new Node('A'));


console.log(l);
console.log(m);
console.log(n);
