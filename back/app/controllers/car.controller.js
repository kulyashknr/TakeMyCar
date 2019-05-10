const Car = require('../models/car.model.js');
const User = require ('../models/user.model.js');

exports.create = (req, res) => {
    // Validate request
    if((!req.body.model) && (!req.body.mark) && (!req.body.color)){
        return res.status(400).send({
            message: "Car content can not be empty"
        });
    }

    const car = new Car({
        model: req.body.model || "Untitled Car",
        mark: req.body.mark,
        color: req.body.color
    });

    car.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Car."
        });
    });
};

exports.findAll = (req, res) => {
    Car.find()
        .then(cars => {
            res.send(cars);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cars."
        });
    });
};

exports.findOne = (req, res) => {
    Car.findById(req.params.carId)
        .then(car => {
            if(!car) {
                return res.status(404).send({
                    message: "Car not found with id " + req.params.carId
                });
            }
            res.send(car);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });
        }
        return res.status(500).send({
            message: "Error retrieving car with id " + req.params.carId
        });
    });
};

exports.update = (req, res) => {
        // Validate Request
        if ((!req.body.model) && (!req.body.mark) && (!req.body.color)) {
            return res.status(400).send({
                message: "Car content can not be empty"
            });
        }

        // Find car and update it with the request body
        Car.findByIdAndUpdate(req.params.carId, {
            model: req.body.model || "Untitled Car",
            mark: req.body.mark,
            color: req.body.color
        }, {new: true})
            .then(car => {
                if (!car) {
                    return res.status(404).send({
                        message: "Car not found with id " + req.params.carId
                    });
                }
                res.send(car);
            }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Car not found with id " + req.params.carId
                });
            }
            return res.status(500).send({
                message: "Error updating car with id " + req.params.carId
            });
        });
};

exports.delete = (req, res) => {
    Car.findByIdAndRemove(req.params.carId)
        .then(car => {
            if(!car) {
                return res.status(404).send({
                    message: "Car not found with id " + req.params.carId
                });
            }
            res.send({message: "Car deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.carId
            });
        }
        return res.status(500).send({
            message: "Could not delete car with id " + req.params.carId
        });
    });
};
