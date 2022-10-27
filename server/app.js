require('dotenv').config()
const express = require('express')
const cors = require('cors')

const connectDb = require('./config/connectDb')

const app = express()
connectDb()

app.use(express.json())
app.use(cors())

app.post('/', (_req, res) => {
    console.log(_req.body)
    res.json({ message: 'data received' })
})

app.listen(8080, () => {
    console.log('Server started on port 8080')
})
