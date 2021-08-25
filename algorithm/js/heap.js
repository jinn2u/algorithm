class MaxHeap {
  constructor() {
    this.heap = [null]
  }
  push(value) {
    this.heap.push(value)
    let currentIndex = this.heap.length -1
    let parentIndex = Math.floor(currentIndex / 2)

    while(parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex]
      this.heap[parentIndex] = value
      this.heap[currentIndex] = temp

      currentIndex = parentIndex
      parentIndex = Math.floor(currentIndex / 2)
    }
  }
  pop() {
    const returnValue = this.heap[1]
    this.heap[1] = this.heap.pop()

    let currentIndex = 1
    let leftIndex = 2
    let rightIndex = 3
    // 하위 정점들이 상위 정점들보다 우선순위가 낮을 경우 종료한다.
    while(
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ){
      if(this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex]
        this.heap[currentIndex] = this.heap[rightIndex]
        this.heap[rightIndex] = temp
        currentIndexjj = rightIndex
      } else {
        const temp = this.heap[currentIndex]
        this.heap[currentIndex] = this.heap[rightIndex]
        this.heap[leftIndex] = temp
        currentIndex = leftIndex
      }
      leftIndex = currentIndex * 2
      rightIndex = currentIndex * 2 + 1
    }
    return returnValue
  }
}

const heap = new MaxHeap()
heap.push(45)
heap.push(36)
console.log(heap.heap)
heap.pop()
console.log(heap.pop())