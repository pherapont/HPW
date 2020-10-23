'use strict';

//  Homework
//  Wrapper will prevent after timeout on call of callback

const timeout = (msec, fn) => {
	let timer = setTimeout(() => {
		if (timer) console.log('Function timedout', fn.name);
		timer = null;
	}, msec);
	return (...args) => {
		if (timer) {
			clearTimeout(timer);
			timer = null;
			return fn(...args);
		}
	};
};

//  Usage

const fn1 = (par, callback) => {
	console.log('Function called, par', par);
	callback(null, par);
};

const fn2 = (par, callback) => {
	console.log('Function called, par', par);
	callback(null, par);
};

const fn100 = timeout(100, fn1);
const fn200 = timeout(200, fn2);

setTimeout(() => {
	fn100('first', (err, data) => {
		console.log('Callback', data);
	});
	fn200('second', (err, data) => {
		console.log('Callback', data);
	});
}, 150);