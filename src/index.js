const express = require('express')
const {PORT, AUTHOR, VERSION} = process.env
const app = express()
console.log(process.env)
app.get('/', (req, res) => {
    res.send(`Hello from ${AUTHOR}! App version: ${VERSION}`)
})

app.listen(PORT, (err) => {
    console.log('Project listen on port ', PORT)
})