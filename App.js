const express = require('express')
const path = require('path')
const server = express() 
const PORT = process.env.PORT || 5000


server.use(express.static('views'))
server.set('view engine', 'ejs')



server.get('/', (req, res)=>{
    res.render('pages/index')
})



server.listen(PORT, ()=>{
    console.log(`Listening to ${PORT}`);
})