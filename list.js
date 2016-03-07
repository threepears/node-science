"use strict";

class Node {
  constructor(data) {
    this.payload = data;
    this.next = null;
  }
}

class List {
  constructor () {
    this.head = null
    this.tail = null
  }

  addHead (node) {
    this.tail = this.tail || node
    node.next = this.head
    this.head = node
  }

  addTail (node) {
    if (this.head) {
      this.tail.next = node
    } else {
      this.head = node
    }

    this.tail = node
  }

  removeTail () {
    let current = this.head

    while (current.next !== this.tail) {
      current = current.next
    }

    current.next = null
    this.tail = current
  }

  removeHead () {
    this.head = this.head.next

    if (!this.head) {
      this.tail = null
    }
  }

  get (index) {
    let current = this.head

    while (index > 0) {
      current = current.next
      index--
    }

    return current
  }
}

const list = new List
list.add(new Node('A'))
list.add(new Node('B'))
list.add(new Node('C'))
list.add(new Node('D'))
list.add(new Node('E'))
list.add(new Node('F'))
console.log(list)
