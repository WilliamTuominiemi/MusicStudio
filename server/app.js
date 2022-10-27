const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (_req, res) => {
    res.json({ message: 'Hello World' })
})

app.listen(8080, () => {
    console.log('Server started on port 8080')
})
