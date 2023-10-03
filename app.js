const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.json({
    message:"Yo yo yo backend"
    })
})

app.listen(3000)