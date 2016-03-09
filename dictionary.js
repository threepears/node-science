'use strict'

class Dictionary {
  constructor () {
    this.data = []
  }

  add (index, value) {
    this.data[index] = value
  }

  find (index) {
    return this.data[index]
  }

  remove (index) {
    delete this.data[index]
  }

  showAll () {
    Object
      .keys(this.data)
      .forEach(key => console.log(key, this.data[key]))
  }
}

function Dictionary2 () {
  const data = []

  this.add = (index, value) => {
    data[index] = value
  }

  this.find = (index) => {
    return data[index]
  }

  this.remove = (index) => {
    delete data[index]
  }

  this.showAll = () => {
    Object
      .keys(data)
      .sort()
      .forEach(key => console.log(key, data[key]))
  }
}
