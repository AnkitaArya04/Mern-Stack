const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")
// app.use(express.static("public"))
app.use('/blog', blog)

//middleware1 - logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.ankita = "I am ankita"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("hacked by middleware 2")
    next()
})

//middleware2
app.use((req, res, next) => {
    console.log('m2')
    next()
})




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello About')
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact' + req.ankita.toString())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})