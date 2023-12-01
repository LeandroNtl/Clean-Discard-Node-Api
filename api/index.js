const express = require('express');
const routes = require('../routes');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors(
    { origin: 'http://localhost:5173', credentials: true}
));

app.use(express.json());

routes(app);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

module.exports = app;