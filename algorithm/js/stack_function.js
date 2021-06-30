const Stack = (function(){
  function Stack(array = []){
    if(!Array.isArray(array)){
      throw new TypeError(`${array} is not an array`)
    }
    this.array = array
  }
  Stack.prototype = {
    constructor: Stack,
    push(value){
      return this.array.push(value)
    },
    pop(value){
      return this.array.pop(value)
    },
    entries(){
      return[...this.array]
    }
  }
  return Stack
}())

const stack = new Stack([1,2])
console.log(stack.entries())