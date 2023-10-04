const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.json({
    message:"testing backend nowww"
    })
})

app.listen(3000)