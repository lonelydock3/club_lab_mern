const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // need to tell mongoose which Object Id this references
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    }

}, {
    timestamps: true // automatically creates an updated and created at field
})


module.exports = mongoose.model('Goal', goalSchema)