'use strict';

const text = (s = '', o = {
    line : a => (s += '\n' + a, o),
    [Symbol.iterator]: () => ({
        next() {
            const res = {value: s, done: this.finished};
            this.finished = true;
            return res;
        }
    })
    }) => o;

// Usage

const txt = text('line1')
    .line('line2')
    .line('line3')
    .line('line4');

console.log(...txt);

const arr = [1, 2, 3, 4];
console.log(...arr);
