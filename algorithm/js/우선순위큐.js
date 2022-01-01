class Heap {
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  insert(key, value) {
    const node = { key, value };
    this.heap.push(node);
    this.heapifyUp(); // 배열의 가장 끝에 넣고 다시 min heap의 형태를 갖추도록 한다.
  }

  remove() {
    const count = this.heap.length;
    const rootNode = this.heap[0];
    if (count <= 0) {
      return null;
    }
    if (count === 1) {
      this.heap = [];
    } else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }
    return rootNode;
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    const lastInseredtNode = this.heap[index];
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      // 부모 노드의 key값이 마지막에 삽입된 노드의 키 값보다 크다면
      // 부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInseredtNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else {
        break;
      }
    }
    // break를 만나서 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장나중에 들어온 노드가 들어갈 자리이다.
    this.heap[index] = lastInseredtNode;
  }
  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      // 왼쪽 오른쪽 중 더 작은 노드를 찾는다.
      // rightChild가 있다면 key의 값을 비교해서 더 작은 값을 찾는다.
      // 없다면 leftChild가 더 작은 값을 가지는 인덱스가 된다.
      let smallerChildIndex;
      if (rightChildIndex < count) {
        if (this.heap[rightChildIndex].key < this.heap[leftChildIndex].key) {
          smallerChildIndex = rightChildIndex;
        } else {
          smallerChildIndex = leftChildIndex;
        }
      }
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else {
        break;
      }
      this.heap[index] = rootNode;
    }
  }
}
class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue = (priority, value) => this.insert(priority, value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}
const test = new PriorityQueue();
test.enqueue(6, 1);
test.enqueue(7, 1);
test.enqueue(2, 3);
test.enqueue(1, 3);
test.enqueue(4, 2);
console.log();
