import LinkedList from './linked-list.js';

const HashMap = function() {
    this._buckets = [];
    this._loadFactor = 0.75;
    this._bucketsFilled = 0;
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

HashMap.prototype.set = function(key, value) {
    const hashCode = this.hash(key);
    if (!(this._buckets[hashCode])) {
        this._buckets[hashCode] = new LinkedList();
        console.log("a");
        this._bucketsFilled++;
        
        console.log((this._bucketsFilled / this._capacity));
        if ((this._bucketsFilled / this._capacity) >= this._loadFactor) {
            // double capacity
        }
    }

    this._buckets[hashCode].set(key, value);
}

HashMap.prototype.get = function(key) {
    const hashCode = this.hash(key);

    if (!this._buckets[hashCode]) {
        return false;
    }

    return this._buckets[hashCode].get(key);
}

HashMap.prototype.has = function(key) {
    const hashCode = this.hash(key);

    if (!this._buckets[hashCode]) {
        return false;
    }

    return this._buckets[hashCode].has(key);
}

HashMap.prototype.getMap = function() { return this._buckets };

export default HashMap;

