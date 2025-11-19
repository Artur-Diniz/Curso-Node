const { Schema } = require("mongoose")
const mongoose = require("../db/conn")

const Pet = mongoose.model(
    "Pet",
    new Schema({
        name: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            require: true
        },
        weight: {
            type: Number,
            require: true
        },
        color: {
            type: String,
            require: true
        },
        images: {
            type: Array,
            require: true
        },
        avaliable: {
            type: Boolean
        },
        user: Object,
        adopter: Object
    },
        { timestamps: true },
    ),
)

module.exports = Pet