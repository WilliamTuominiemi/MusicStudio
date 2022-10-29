require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./config/connectDb')

const Beat = require('./models/Beat')

const app = express()

connectDb()

app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
    const data = Object.entries(req.body)

    const obj = {
        beat: data,
    }

    Beat.create(obj, (err, item) => {
        console.log(item)
        if (err) {
            console.log(err)
        }
    })
    res.json({ message: 'data received' })
})

app.listen(8080, () => {
    console.log('Server started on port 8080')
})
