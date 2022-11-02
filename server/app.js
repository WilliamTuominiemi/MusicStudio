require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./config/connectDb')

const Beat = require('./models/Beat')

const app = express()

connectDb()

app.use(express.json())
app.use(cors())

app.post('/', async (req, res) => {
    const { name, cover, pitch, speed } = req.body

    const beat = await Beat.create({
        name,
        cover,
        pitch,
        speed,
        notes: Object.entries(req.body.notes),
    })
    console.log(beat)
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
