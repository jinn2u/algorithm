class Queue{
  #array
  constructor(array=[]){
    if(!Array.isArray(array)){
      throw new TypeError(`${array} is not a function`)
    }
    this.#array = array
  }
  enqueue(value){
    return this.#array.push(value)
  }
  dequeue(){
    return this.#array.pop()
  }
  entries(){
    return [... this.#array]
  }
}
const queue = new Queue([1,2,3])
console.log(queue.entries())

queue.enqueue(1)
console.log(queue.entries())

queue.dequeue()
console.log(queue.entries())