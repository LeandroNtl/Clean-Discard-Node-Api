const bodyParser = require('body-parser');
const users = require('./usersRouter');

module.exports = app => {

    app.use(bodyParser.json());

    app.use(users);

    app.get('/', async (req, res) => {
        res.status(200).send({
            message: 'Hello World!'
        });
    });

}