const { Router } = require('express');
const UserController = require('../controllers/UserController');
const authChecker = require('../middlewares/authChecker');

const router = Router();

//router.use(authChecker);
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUser);
router.post('/register', UserController.createUser);
router.put('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;