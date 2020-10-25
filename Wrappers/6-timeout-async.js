'use strict';

//  Homework
//  Wrapper will prevent after timeout on call of callback

const timeout = (msec, fn) => {
	let timer = setTimeout(() => {
		if (timer) console.log('Timer finished', fn.name);
		timer = null;
	}, msec);

	return (...args) => {
		args[args.length - 1] = (...pars) => {
			if (timer) {
				clearTimeout(timer);
				timer = null;
				args[args.length - 1](...pars);
				console.log('Callback called', pars);
			};
		};
		fn(...args);
	}
};

//  Usage

const fn = (par, callback) => {
	console.log('Function called, par', par)
	setTimeout(() => {
		console.log('Function callback called');
		callback(null, par);
	}, 150);
};


const fn100 = timeout(100, fn);
const fn200 = timeout(200, fn);

fn100('first', (err, data) => {
	console.log('Callback', data);
});

fn200('second', (err, data) => {
	console.log('Callback', data);
});