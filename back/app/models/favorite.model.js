import User from './user.model'
import Car from './car.model'


const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const FavoriteSchema = mongoose.Schema({
    car:{
        type: Schema.Types.ObjectId, ref: Car
    },
    owner:{
        type: Schema.Types.ObjectId, ref: User
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Favorite', FavoriteSchema);
