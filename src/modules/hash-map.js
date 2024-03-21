const HashMap = function() {
    this._buckets = [];
    this._loadFactor = 0.75;
    this. _capacity = 16;

    
    
}

HashMap.prototype.hash = function (key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber + key.charCodeAt(i)) % this._capacity;
    }

    return hashCode;
    
}

export default HashMap;

