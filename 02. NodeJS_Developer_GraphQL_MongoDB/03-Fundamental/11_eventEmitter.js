const EventEmitter = require('events');
const celebrity = new EventEmitter();

// 
celebrity.on('race win', ()=> {
    console.log('Congratulation! You won the race')
})

celebrity.emit('race win', ()=> {
    console.log('There must be a other way!')
})

celebrity.emit('race-win');