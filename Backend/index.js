const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')
app.use(cors())
app.use(express.json())  // to use req


app.get('/', (req, res) => {
    res.send('hello world')
  })
  
app.use('/api/auth', require('./routes/auth'));
app.use('/api/comments',require('./routes/comments'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})