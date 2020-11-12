'use strict';

const EventEmitter = require('./1-simple.js');

const ee = new EventEmitter();

ee.on('event_1', data => {
    console.dir(data);
});

ee.emit('event_1', {a: 5});

ee.on('event_2', (...data) => {
    console.log(...data);
});

ee.emit('event_2', 1, 2, 3);
