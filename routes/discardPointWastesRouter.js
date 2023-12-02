const { Router } = require('express');
const DiscardPointWastesController = require('../controllers/DiscardPointWasteController');

const router = Router();

router.get('/discard-point-wastes', DiscardPointWastesController.getDiscardPointWastes);
router.get('/discard-point-wastes/:id', DiscardPointWastesController.getDiscardPointWaste);
router.post('/discard-point-wastes', DiscardPointWastesController.createDiscardPointWaste);
router.put('/discard-point-wastes/:id', DiscardPointWastesController.updateDiscardPointWaste);
router.delete('/discard-point-wastes/:id', DiscardPointWastesController.deleteDiscardPointWaste);

module.exports = router;