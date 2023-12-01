const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

const router = Router();

router.post('/auth/login', AuthController.login);
router.post('/auth/logout', AuthController.logout);
router.post('/auth/verify-token', AuthController.verifyToken);

module.exports = router;