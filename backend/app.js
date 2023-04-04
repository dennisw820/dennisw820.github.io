const express = require('express')
const app = express();

app.get('/', (req, res)=>{
    res.sendFile('../frontend/index.html')
})
app.get('/about', (req, res)=>{
    res.sendFile('../frontend/index.html')
})
app.get('/projects', (req, res)=>{
    res.sendFile('../frontend/index.html')
})
app.get('/experience', (req, res)=>{
    res.sendFile('../frontend/index.html')
})

let port = 3000;
app.listen(port, ()=> console.log(`Server running on port ${port}.`))
