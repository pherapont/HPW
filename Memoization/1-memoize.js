'use strict';

const argKey = x => x.toString() + ':' + typeof x;
const generateKey = args => args.map(argKey).join('|');

const memoize = f => {
  const cache = Object.create(null);
  return (...args) => {
	const key = generateKey(args);
	const val = cache[key];
	if (val) {
	console.log('Result from cache');
	return val;
	};
	console.log('Result from function');
	const res = f(...args);
	cache[key] = res;
	return res;
  };
};

// Usage

const sumSeq = (a, b) => {
  let r = 0;
  for (let i = a; i < b; i++) r += i;
  return r;
};

const mSumSeq = memoize(sumSeq);

console.log('First call mSumSeq(2, 5)');
console.log(mSumSeq(2, 5));

console.log('Second call mSumSeq(2, 5)');
console.log(mSumSeq(2, 5));

console.log('Call mSumSeq(2, 6)');
console.log(mSumSeq(2, 6));