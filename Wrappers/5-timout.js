'use strict';

//  Wrapper will prevent call after timout (single realese)

// const timeoutOnce = (msec, fn) => {
// 	let timer = setTimeout(() => {
// 		if (timer) console.log('Function timed out');
// 		timer = null;
// 	}, msec);
// 	return (...args) => {
// 		if (!timer) return;
// 		clearTimeout(timer);
// 		timer = null;
// 		return fn(...args);
// 	};
// };

// //  Usage

// const fn = par => {
// 	console.log('Fanction called, par', par);
// };

// const fn100 = timeoutOnce(100, fn);
// const fn200 = timeoutOnce(200, fn);

// fn100('first killer');
// fn200('killer');

// setTimeout(() => {
// 	fn100('first');
// 	fn200('second');
// }, 150);

//  Wrapper will prevent call after timout (can repeat calls realese)

const timeoutWihManyCalls = (msec, fn) => {
	let timer = setTimeout(() => {
		if (timer) console.log('Function timed out');
		clearTimeout(timer);
		timer = null;
	}, msec);
	return (...args) => {
		if (!timer) return;
		return fn(...args);
	};
};

const fn2 = par => {
	console.log('Fanction called, par', par);
};

const fn2_100 = timeoutWihManyCalls(100, fn2);
const fn2_200 = timeoutWihManyCalls(200, fn2);

fn2_100('fn2-first killer');
fn2_200('fn2-second killer');

setTimeout(() => {
	fn2_100('fn2-first');
	fn2_200('fn2-second');
}, 150);