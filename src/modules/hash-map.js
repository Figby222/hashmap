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

HashMap.prototype.remove = function(key) {
    const hashCode = this.hash(key);
    const bucket = this._buckets[hashCode];
    console.log("BEfore remove: ", this._bucketsFilled)
    if (bucket.has(key)) {
        bucket.remove(key);
        if (bucket.checkEmpty()) {
            this._buckets.splice(hashCode, 1);
            this._bucketsFilled--;
        }
    }
    console.log("After remove: ", this._bucketsFilled)

}

HashMap.prototype.length = function() {
    let length = 0;

    this._buckets.forEach((bucket) => length += bucket.size());

    return length;
}

HashMap.prototype.clear = function() {
    this._buckets.forEach((bucket) => bucket.clear());
}

HashMap.prototype.keys = function() {
    let keysArr = [];
    this._buckets.forEach((bucket) => keysArr = keysArr.concat(bucket.keys()));
    return keysArr;
}

HashMap.prototype.values = function() {
    let valuesArr = []
    this._buckets.forEach((bucket) => valuesArr = valuesArr.concat(bucket.values()));
    return valuesArr;
}

HashMap.prototype.getMap = function() { return this._buckets };

export default HashMap;

