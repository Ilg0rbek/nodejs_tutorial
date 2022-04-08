const EventEmmiter = require('events')

//eventemmiterdan meros olish
class NewEmmiter extends EventEmmiter { }

const newEmmiter = new NewEmmiter()

newEmmiter.on('hello', () => {
    console.log('hello world');
})

newEmmiter.emit('hello')