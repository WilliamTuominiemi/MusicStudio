const mongoose = require('mongoose')

const BeatSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
            required: true,
        },
        pitch: {
            type: Number,
            requred: true,
        },
        speed: {
            type: Number,
            requred: true,
        },
        notes: {
            type: Array,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Beat', BeatSchema)
