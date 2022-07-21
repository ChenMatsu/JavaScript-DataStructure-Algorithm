class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);

        return index;
    }

    get(key) {
        let index = this._hash(key);

        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i];
                }
            }
        }
        return undefined;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!values.includes(this.keyMap[i][j][1])) values.push(this.keyMap[i][j][1]);
                }
            }
        }

        return values;
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keys.includes(this.keyMap[i][j][0])) keys.push(this.keyMap[i][j][0]);
                }
            }
        }

        return keys;
    }
}

let hash = new HashTable();
console.log(hash.set("Hello, world", "gooldbye"));
console.log(hash.set("Great, Dream", "night"));
console.log(hash.set("Great, Monday", "night"));
console.log(hash.set("Dog, cat", "cute"));
console.log(hash.set("Wonder, whether", "true"));
console.log(hash);
console.log(hash.get("Hello, world"));
console.log(hash.values());
console.log(hash.keys());
