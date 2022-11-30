/** Queue Data Structure */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    } else {
      return null;
    }
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// console.log(queue.isEmpty());
// queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
// console.log(queue.size());
