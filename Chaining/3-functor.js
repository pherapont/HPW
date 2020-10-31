//  Каждый раз саздается новый экземпляр
//  Функция чистая

'use strict';

const textGenerator = (s = '') => ({
	line: a => textGenerator(`${s}\n${a}`),
	toString: () => s
});

const txt = textGenerator('line1')
	.line('line2')
	.line('line3')
	.line('line4');

console.log(`${txt}`);
console.log(txt);

