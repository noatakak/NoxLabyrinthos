class Compass{  
    currentDirection;

    constructor(){
        this.currentDirection = new DoublyLinkedList;
        this.currentDirection.append("NORTH");
        this.currentDirection.append("EAST");
        this.currentDirection.append("SOUTH");
        this.currentDirection.append("WEST");
    }

    setCompass(dirString){
        this.currentDirection.setHead(dirString);
    }
}

class Node {
    constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    }

    // Add a new node to the end of the list
    append(data) {
    const node = new Node(data);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.tail.next = head;
    }

    this.length++;
    }

    setHead(dir) {
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++){
            if(currentNode.data = dir){
                this.head = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
      }

    // Add a new node to the beginning of the list
    prepend(data) {
    const node = new Node(data);

    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    this.length++;
    }

    // Remove a node from the list
    remove(node) {
    if (node === this.head && node === this.tail) {
        this.head = null;
        this.tail = null;
    } else if (node === this.head) {
        this.head = node.next;
        this.head.prev = null;
    } else if (node === this.tail) {
        this.tail = node.prev;
        this.tail.next = null;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    this.length--;
    }

    // Convert the list to an array
    toArray() {
    const arr = [];

    let current = this.head;
    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    return arr;
    }
}