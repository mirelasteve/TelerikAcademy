const coef = 0.7;
class NewSet {
    constructor() {
            this.values = [];
            this.count = 0;
            this.capacity = 4; //realno trqbva da e 16
        }
        //     get size(){
        // return this._count;
        //     }
    _shouldExpand() {
        if (this.count >= 0.7 * this.capacity) {
            this.capacity *= 2;
        }
    }
    add(value) {
        if (this._shouldExpand()) {
            //get the hash of value
            const hash = this._calcHash(value);
            if (typeof(this.values[hash]) == 'undefined') {
                this.values[hash] = [value];
            }
            if (this.values[hash].includes(value)) {
                return;
            } else {
                this.values[hash].push(value);
            }
            return this;
        }
    }
    remove() {

    }

    has(value) {
        const hash = this._calcHash(value);
        if (typeof(this.values[hash] == 'undefined')) {
            return false;
        } else {
            return true;
        }
    }

    _calcHash(value) {
        let hash = 0;
        value.toString().split('')
            .forEach((element) => {
                hash *= 2;
                hash += element.charCodeAt(0);


            });
        return Math.abs(hash) % this.capacity;
    }

}

let sett = new NewSet();
// [sett._calcHash('john'),
//     sett._calcHash('jane'),
//     sett._calcHash('stamat')
// ].forEach((hash) => console.log(hash));
sett.add('john');
console.log(sett.values);
