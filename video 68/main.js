const express=require('express')
const app=express()
const port=3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req,res)=>{
    res.send('Hello World2')
})

app.get('/about', (req,res)=>{
    res.send('About us')
})

app.get('/contact', (req,res)=>{
    res.send('please contact')
})

app.get('/blog', (req,res)=>{
    res.send('Hello Blog')
})

app.get('/blog/:slug', (req,res)=>{
    // logic to fecth intro to  ${slug} from the db
    console.log(req.params) //will output {slug: 'intro-to-padosi'}
    console.log(req.query) //will output {slug: 'into-to-padosi'}
    res.send(`hello ${req.params.slug}`)
})


// app.get('/blog/intro-to-js', (req,res)=>{
//     // logic to fecth intro to js from the db
//     res.send('Hello intro-to-js')
// })

// app.get('/blog/intro-to-python', (req,res)=>{
//     // logic to fecth intro to js from the db
//     res.send('Hello intro-to-python')
// })

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})