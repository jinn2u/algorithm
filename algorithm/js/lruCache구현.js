class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LRUCache {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = 4;
    this.cache = {};
  }
  set(key, value) {
    let newNode;
    if (this.cache[key]) {
      newNode = this.get(key);
      console.log(newNode, " asdf");
      newNode.value = value;
      this.size -= 1;
    }
    if (!this.cache[key]) {
      newNode = new Node(key, value);
    }
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size += 1;
      this.cache[key] = newNode;
      return this;
    }
    if (this.size === this.maxSize) {
      delete this.cache[this.tail.key];

      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size -= 1;
    }
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.size++;

    //add to cache
    this.cache[key] = newNode;
    return;
  }
  get(key) {
    if (!this.cache[key]) {
      return null;
    }
    let foundNode = this.cache[key];
    if (foundNode === this.head) return foundNode;

    let previous = foundNode.prev;
    let next = foundNode.next;

    if (foundNode === this.tail) {
      previous.next = null;
      this.tail = previous;
    } else {
      previous.next = next;
      next.prev = previous;
    }

    this.head.prev = foundNode;
    foundNode.next = this.head;
    foundNode.prev = null;
    this.head = foundNode;

    return foundNode;
  }
}
const a = new LRUCache();
a.set("a", 1);
a.set("a", 2);
// a.set("b", 1);
// a.set("a", 10);
// a.set("d", 100);
// a.set("a", 30);
// console.log(a.get("d"));
// a.set("c", 20);
// a.set("e", 30);
// a.set("f", 1);
// console.log(a);

// e c d a
