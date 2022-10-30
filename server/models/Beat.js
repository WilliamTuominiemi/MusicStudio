const mongoose = require('mongoose')

const BeatSchema = new mongoose.Schema({
    notes: {
        type: Array,
        required: true,
    },
})

module.exports = mongoose.model('Beat', BeatSchema)
