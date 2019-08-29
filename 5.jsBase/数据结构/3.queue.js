// 队列 先进先出原则
// 单链队列 和 循环队列
// 实现单链队列
class Queue {
  constructor() {
    this.queue = [];
  }
  enQueue(item) {
    this.queue.push(item);
  }
  deQueue() {
    this.queue.shift();
  }
  getHeader() {
    return this.queue["0"];
  }
  getLength() {
    return this.queue.length;
  }
  isEmpty() {
    return this.getLength() === 0;
  }
}

// 循环队列
