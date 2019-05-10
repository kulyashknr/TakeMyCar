module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.post('/login', users.login);
    app.post('/register', users.create);

    app.get('/users', users.findAll);
    app.get('/users/:userId', users.findOne);


}
