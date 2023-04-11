const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor () {
    this.head = null
    this.length = 0
  }
  
  getUnderlyingList() {
    if(!this.length)
      return {}

    let currentHead = this.head

    function getObjList(current) {
      if(!current) 
        return null

      return {
        value: current.value,
        next: getObjList(current.next)
      }
    }

    console.log(getObjList(currentHead))

    return getObjList(currentHead)

  }

  enqueue(value) {
      if(this.length === 0) {
        this.head = new ListNode(value)
        this.length++
        return
      }
  
      let current = this.head
      let newNode = new ListNode(value)
      this.length++

      while(current.next) {
        current = current.next
      }

      current.next = newNode
      return this
  }

  dequeue() {
    if(!this.length) 
      return null
  
      let deleted = this.head 
      this.head = this.head.next
      this.length--

      return deleted.value
  }
}

module.exports = {
  Queue
};
