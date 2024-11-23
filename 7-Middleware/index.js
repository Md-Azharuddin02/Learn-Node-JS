const express = require('express')
const users = require('../6-REST API/MOCK_DATA.json')
const PORT = 8000


const app= express()

// Middlewares
app.use(express.urlencoded({extends:false}))
// This is a express middleware method that help the parse the data received form a "x-www-form-urlencoded"
// extends: fasle can't hanlde nested data where as extend: true can handle parse data
// By default, Express sets a limit on the payload size (100KB). You can change it using the limit option:

app.use((req, res, next)=>{
    const body = req.body
    next()
})
app.use((req, res, next)=>{
   console.log(req.body)
})

app.route('/api/users')
.get((req, res)=> {
    return res.json(users)
})
.post((req, res)=>{
    const body= req.body
    console.log(body)
    return res.send('User created successfully')
})

app.listen(PORT, ()=>console.log('Hey, I am listing'))


