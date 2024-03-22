const Node = function (key, value, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
}

export default Node;