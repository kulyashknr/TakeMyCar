const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useFindAndModify: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/car.route.js')(app);
require('./app/routes/user.route.js')(app);
require('./app/routes/order.route.js')(app);

// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
