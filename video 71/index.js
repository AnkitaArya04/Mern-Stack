const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr=["hey",54,65]
  res.render("index",{siteName:siteName, searchText:searchText,arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas wh and when"
    let blogContent = "its a very good brand"
  res.render("blogpost",{blogTitle:blogTitle, blogContent:blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})