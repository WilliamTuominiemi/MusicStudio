const mongoose = require('mongoose')

const BeatSchema = new mongoose.Schema({
    beat: {
        type: Array,
        required: true,
    },
})

module.exports = mongoose.model('Beat', BeatSchema)
