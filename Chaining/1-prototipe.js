'use strict';

const Text = function(s) {
	this.value = s;
};

Text.prototype.line = function(l) {
	this.value += '\n' + l;
	return this;
};

Text.prototype.toString = function() {
	return this.value;
};

// Usage

const text = new Text('line 1');

text.line('line 2')
	.line('line 3')
	.line('line 4');

console.log(text + '');
console.log(Text.prototype, text.prototype);