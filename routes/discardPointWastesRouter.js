const { Router } = require('express');
const DiscardPointWastesController = require('../controllers/DiscardPointWasteController');

const router = Router();

router.get('/discard_point_wastes', DiscardPointWastesController.getDiscardPointWastes);
router.get('/discard_point_wastes/:id', DiscardPointWastesController.getDiscardPointWaste);
router.post('/discard_point_wastes', DiscardPointWastesController.createDiscardPointWaste);
router.put('/discard_point_wastes/:id', DiscardPointWastesController.updateDiscardPointWaste);
router.delete('/discard_point_wastes/:id', DiscardPointWastesController.deleteDiscardPointWaste);

module.exports = router;