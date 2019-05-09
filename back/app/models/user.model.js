const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    username: String,
    password: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);
