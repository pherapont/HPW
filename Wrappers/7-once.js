'use strict';

//  Обертка, которая обеспечивает однократный вызов функции

const once = fn => (...args) => {
	if (!fn) return;
	const res = fn(...args);
	fn = null;
	return res;
};

const fn = (...args) => {
	console.log('Function called, args', args);
};

const fnOnce = once(fn);

fnOnce('First call');
fnOnce('Second call');