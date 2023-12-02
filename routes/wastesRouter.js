const { Router } = require('express');
const WasteController = require('../controllers/WasteController');
const authChecker = require('../middlewares/authChecker');

const router = Router();

//router.use(authChecker);

router.get('/wastes', WasteController.getWastes);
router.get('/wastes/:id', WasteController.getWaste);
router.post('/wastes', WasteController.createWaste);
router.put('/wastes/:id', WasteController.updateWaste);
router.delete('/wastes/:id', WasteController.deleteWaste);

module.exports = router;