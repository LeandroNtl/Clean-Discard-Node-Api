const { Router } = require('express');
const WasteController = require('../controllers/WasteController');

const router = Router();

router.get('/wastes', WasteController.getWastes);
router.get('/wastes/:id', WasteController.getWaste);
router.post('/wastes', WasteController.createWaste);
router.put('/wastes/:id', WasteController.updateWaste);
router.delete('/wastes/:id', WasteController.deleteWaste);

module.exports = router;