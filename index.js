// const Logger = require('./loger')
// const logger = new Logger()
// logger.on('message', (data) => {
//     console.log('loging:', data);
// })
// logger.log('get', '/admin/dashboard')

const http = require('http')
const path = require('path')
const fs = require('fs')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//             if (err) throw err
//             res.writeHead(200, { 'Content-Type': "text / html" })
//             res.end(content)
//         })
//     }
// })

// const PORT = process.env.PORT || 3000;

// server.listen(PORT, () => {
//     console.log(`Server running on ${PORT}`);
// })

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const books = [
            { name: 'Alxemik', authtor: 'Ilgor', pages: 150 },
            { name: 'Oybek', authtor: 'Sherali', pages: 220 },
            { name: 'Shaytanat', authtor: 'Murat', pages: 300 }
        ]
        res.writeHead(200, { 'Content-type': 'aplication / json' })
        res.end(JSON.stringify(books))
    }
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})