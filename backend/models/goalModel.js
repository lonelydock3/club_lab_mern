const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }

}, {
    timestamps: true // automatically creates an updated and created at field
})


module.exports = mongoose.model('Goal', goalSchema)