import User from './user.model'


const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CarSchema = mongoose.Schema({
    model: String,
    mark: String,
    year: Number,
    color: String,
    owner:{
        type: Schema.Types.ObjectId, ref: User
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', CarSchema);
