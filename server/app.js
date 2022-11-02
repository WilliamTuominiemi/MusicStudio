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
        name: req.body.name,
        cover: req.body.cover,
        pitch: req.body.pitch,
        speed: req.body.speed,
        notes: req.body.notes,
    }

    Beat.create(obj, (err, item) => {
        console.log(item)
        if (err) {
            console.log(err)
        }
    })
    res.json({ message: 'Beat uploaded successfully' })
})

app.get('/', async (req, res) => {
    try {
        let beats = []

        beats = await Beat.find().sort({ createdAt: -1 })

        return res.json({ beats })
    } catch (err) {
        return err
    }
})

app.listen(8080, () => {
    console.log('Server started on port 8080')
})
