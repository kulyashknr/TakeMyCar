const Favorite = require ('../models/favorite.model.js');

exports.create = (req, res) => {
    // Validate request
    if((!req.body.car) || (!req.body.owner)){
        return res.status(400).send({
            message: "Favorite content can not be empty"
        });
    }

    const favorite = new Favorite({
        car: req.body.car,
        owner: req.body.owner,
    });

    favorite.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Favorite."
        });
    });
};

exports.findAll = (req, res) => {
    Favorite.find()
        .then(favorites => {
            res.send(favorites);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving favorites."
        });
    });
};

exports.findOne = (req, res) => {
    Favorites.findById(req.params.favoriteId)
        .then(favorite => {
            if(!favorite) {
                return res.status(404).send({
                    message: "Favorite not found with id " + req.params.favoriteId
                });
            }
            res.send(favorite);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Favorite not found with id " + req.params.favoriteId
            });
        }
        return res.status(500).send({
            message: "Error retrieving favorite with id " + req.params.favoriteId
        });
    });
};

exports.delete = (req, res) => {
    Favorite.findByIdAndRemove(req.params.favoriteId)
        .then(favorite => {
            if(!favorite) {
                return res.status(404).send({
                    message: "Favorite not found with id " + req.params.favoriteId
                });
            }
            res.send({message: "Favorite deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Favorite not found with id " + req.params.favoriteId
            });
        }
        return res.status(500).send({
            message: "Could not delete favorite with id " + req.params.favoriteId
        });
    });
};
