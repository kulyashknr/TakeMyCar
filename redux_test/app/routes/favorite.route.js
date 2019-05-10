module.exports = (app) => {
    const favorites = require('../controllers/favorite.controller.js');

    app.post('/favorites', favorites.create);
    app.get('/favorites', favorites.findAll);
    app.get('/favorites/:favoriteId', favorites.findOne);
    app.delete('/favorites/:favoriteId', favorites.delete);
}
