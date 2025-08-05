// Example


// const { EventEmitter } = require('events');

// // Create a new emitter instance
// const emitter = new EventEmitter();

// // Set up a listener for the 'greet' event
// emitter.on('greet', (name) => {
//   console.log(`Hello, ${name}!`);
// });

// // Emit the 'greet' event
// emitter.emit('greet', 'Mourya');






// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', () => {
//     console.log('data recieved')
// })

// customEmitter.emit('response')



// Always first listen to the event and then emit the event



// we can have or listen to many events


const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
    console.log('data recieved')
})

customEmitter.on('response', (name, id) => {
    console.log(`data recieved by user ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log('some other logic here')
})

customEmitter.on('response', () => {
    console.log('some other logic here')
})

customEmitter.emit('response', 'mcb', 24)