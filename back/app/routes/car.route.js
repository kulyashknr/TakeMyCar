module.exports = (app) => {
    const cars = require('../controllers/car.controller.js');

    // Create a new Note
    app.post('/cars', cars.create);

    // Retrieve all Notes
    app.get('/cars', cars.findAll);

    // Retrieve a single Note with noteId
    app.get('/cars/:carId', cars.findOne);

    // Update a Note with noteId
    app.put('/cars/:carId', cars.update);

    // Delete a Note with noteId
    app.delete('/cars/:carId', cars.delete);
}
