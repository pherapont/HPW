'use strict';

//  Wrapper will prevent calls > n

const limit = (count, fn) => {
	let counter = 0;
	return (...args) => {
		if (counter === count) return;
		counter++;
		fn(...args);
	};
};

const fn = (...args) => {
	console.log('Function called, args', args);
};

const fnWithLimit = limit(2, fn);

fnWithLimit('first');  
fnWithLimit('second');  
fnWithLimit('third');  