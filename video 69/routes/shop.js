const express = require('express')
const router = express.Router()


//define the home page router
router.get('/',(req,res)=>{
    res.send('sHope home page')
})
//define the about route
router.get('/about',(req,res)=>{
    res.send('About Shop')
})



module.exports=router