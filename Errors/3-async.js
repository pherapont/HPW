'use strict';

const sum = (a, b, callback) => {
	if (typeof a === 'number' && typeof b ==='number') {
		callback(null, a + b);
	} else {
		callback(new Error('a and b should be numbers'));
	}
};

sum(2, 3, (err, result) => {
	if (err) {
		console.log(err.message);
		return;
	}
	console.log(result);
});

sum('A', 3, (err, result) => {
	if (err) {
		console.log(err.message);
		return;
	}
	console.log(result);
});

console.log('This string should be printed first, no - last');