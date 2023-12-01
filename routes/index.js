const bodyParser = require('body-parser');
const users = require('./usersRouter');
const wastes = require('./wastesRouter');
const discard_points = require('./discardPointsRouter');
const evaluations = require('./evaluationsRouter');
const discard_point_wastes = require('./discardPointWastesRouter');
const auth = require('./authRouter');

module.exports = app => {

    app.use(bodyParser.json());
    
    app.use(discard_points);
    app.use(evaluations);
    app.use(discard_point_wastes);
    app.use(auth);
    app.use(users);
    app.use(wastes);

    app.get('/', async (req, res) => {
        res.status(200).send({
            message: 'Hello World!'
        });
    });

}