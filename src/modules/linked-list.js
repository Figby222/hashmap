import Node from './node.js';

const LinkedList = function() {
    this._linkedList = {};
};

LinkedList.prototype.tail = function() {
    if (Object.values(this._linkedList).length == 0) {
        return false;
    }

    let currentNode = this._linkedList

    while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
    }

    return currentNode;
}

LinkedList.prototype.append = function(key, value) {
    const node = new Node(key, value);


    if (Object.values(this._linkedList).length == 0) {
        this._linkedList = node;
        return;
    }

    this.tail().nextNode = node;
}

LinkedList.prototype.pop = function() {
    let currentNode = this._linkedList;

    while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;

}

LinkedList.prototype.get = function(key) {
    let currentNode = this._linkedList;

    while (currentNode) {
        if (currentNode.key === key) {
            return currentNode;
        }

        currentNode = currentNode.nextNode;
    }

    return false;
}

LinkedList.prototype.getList = function() {
    return this._linkedList;
}

export default LinkedList;