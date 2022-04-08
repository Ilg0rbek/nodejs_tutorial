const EventEmmiter = require('events')
const uuid = require('uuid')

class Logger extends EventEmmiter {
    log(method, route) {
        this.emit('message', { id: uuid.v4(), method: method, route: route })
    }
}

module.exports = Logger