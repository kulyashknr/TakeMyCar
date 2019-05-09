const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    model: String,
    mark: String,
    color: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Car', CarSchema);
