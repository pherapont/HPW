'use strict';

class Text {
  constructor(s) {
    this.value = s;
  }

  line(a) {
    this.value += '\n' + a;
    return this;
  }

  toString() {
    return this.value;
  }
}

// Usage

const txt = new Text('line1')
  .line('line2')
  .line('line3')
  .line('line4');

console.log(`${txt}`);

console.log('Text.pototype: ', Text.prototype);
console.log('txt.pototype: ', txt.prototype);
console.log('txt', txt);
