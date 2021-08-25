// shift는 선형시간이 걸리개 때문에 O(n)
class Queue {
  constructor() {
    this.queue = []
    this.front = 0
    this.rear = 0
  }
  enqueue(value) {
    this.queue[this.rear++] = value  
  }
  dequeue() {
    const value = this.queue[this.front]
    delete this.queue[this.front]
    this.front += 1
    return value
  }
  peek() {
    return this.queue[this.front]
  }
  size() {
    return this.rear - this.front
  }
}
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.peek())
console.log(queue.dequeue())
console.log(queue.size())
