const Car = require('../models/car.model.js');
const User = require ('../models/user.model.js');
const Order = require ('../models/order.model.js');

exports.create = (req, res) => {
    // Validate request
    if((!req.body.client) || (!req.body.sender) || (!req.body.car)){
        return res.status(400).send({
            message: "Order content can not be empty"
        });
    }

    const order = new Order({
        client: req.body.client,
        sender: req.body.sender,
        car: req.body.car,
        status: req.body.status || "not done"
    });

    order.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    });
};

exports.findAll = (req, res) => {
    Order.find()
        .then(orders => {
            res.send(orders);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving orders."
        });
    });
};

exports.findOne = (req, res) => {
    Orders.findById(req.params.orderId)
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.orderId
                });
            }
            res.send(order);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        return res.status(500).send({
            message: "Error retrieving order with id " + req.params.orderId
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if ((!req.body.client) || (!req.body.sender) || (!req.body.car)) {
        return res.status(400).send({
            message: "Order content can not be empty"
        });
    }

    Order.findByIdAndUpdate(req.params.orderId, {
        client: req.body.client,
        sender: req.body.sender,
        car: req.body.car,
        status: req.body.status || "not done"
    }, {new: true})
        .then(order => {
            if (!order) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.orderId
                });
            }
            res.send(order);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        return res.status(500).send({
            message: "Error updating order with id " + req.params.orderId
        });
    });
};

exports.delete = (req, res) => {
    Order.findByIdAndRemove(req.params.orderId)
        .then(order => {
            if(!order) {
                return res.status(404).send({
                    message: "Order not found with id " + req.params.orderId
                });
            }
            res.send({message: "Order deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.orderId
            });
        }
        return res.status(500).send({
            message: "Could not delete order with id " + req.params.orderId
        });
    });
};
