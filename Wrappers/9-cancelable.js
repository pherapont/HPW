'use strict';

const setCancel = fn => {
	const wrapper = (...args) => {
		if (fn) return fn(...args);
	};
	wrapper.cancel = () => fn = null;
	return wrapper;
};

const fn = (...args) => {
	console.log('Fanction called, args', args);
};

const cancelableFn = setCancel(fn);

cancelableFn('first');
cancelableFn('yet one');
cancelableFn.cancel();
cancelableFn('second');