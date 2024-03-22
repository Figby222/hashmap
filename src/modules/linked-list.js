const LinkedList = function() {
    this._linkedList = {};
};

LinkedList.prototype.tail = function() {
    if (Object.values(_linkedList).length = 0) {
        return false;
    }

    let currentNode = this._linkedList

    while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
    }

    return currentNode;
}