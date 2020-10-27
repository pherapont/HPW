'use strict';

//  It's my version of execution homework
//  File b-optimized.js - better version of Timur

const wrap = f => {
	let limit = 0;
	let counter = 0;
	let isCallable = true;

	const wrapper = (...args) => {
		if (limit && counter === limit) {
			limit = 0;
			counter = 0;
			wrapper.cancel();
			return
		} 
		if (isCallable) {
			const res = f(...args);
			counter ++;
			return res;
		}
	};

	wrapper.timeout = msec => {
		setTimeout(() => {
			wrapper.cancel();
		}, msec);
		return wrapper;
	};

	wrapper.cancel = () => {
		isCallable = false;
		return wrapper;
	};

	wrapper.resume = () => {
		isCallable = true;
		return wrapper;
	};
	
	wrapper.limit = count => {
		limit = count;
		return wrapper;
	};

	return wrapper;
};

//  Usage

const fn = par => {
	console.log('Function called, par', par);
}

const fn2 = wrap(fn).timeout(200).limit(3);
fn2('first');

setTimeout(() => {
	fn2('second');
	fn2.cancel();
	fn2('third');
	fn2.resume();
	fn2('4th');
}, 150);