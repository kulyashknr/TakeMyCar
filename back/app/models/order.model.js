import User from "./user.model";
import Car from "./car.model";


const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const OrderSchema = mongoose.Schema({
    client:{
        type: Schema.Types.ObjectId, ref: User
    },
    sender:{
        type: Schema.Types.ObjectId, ref: User
    },
    car:{
        type: Schema.Types.ObjectId, ref: Car
    },
    status: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);
