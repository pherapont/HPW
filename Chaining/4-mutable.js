//  Экземпляр остается тот же и изменяется
//  Экономия памяти на объектах и замыканиях
//  Нарушен принцип функтора - возвращать каждый раз новый инстанс

'use strict';

const textGenerator = (s = '', o = {
	line: a => (s +='\n' + a, o),
	toString: () => s
}) => o;

const txt = textGenerator('line1')
	.line('line2')
	.line('line3')
	.line('line4');

console.log(`${txt}`);
console.log(txt);
