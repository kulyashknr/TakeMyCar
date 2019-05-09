module.exports = (app) => {
    const orders = require('../controllers/order.controller.js');

    app.post('/orders', orders.create);
    app.get('/orders', orders.findAll);
    app.get('/orders/:orderId', orders.findOne);
    app.put('/orders/:ordersId', orders.update);
    app.delete('/orders/:ordersId', orders.delete);
}
