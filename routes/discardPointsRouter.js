const { Router } = require('express');
const DiscardPointController = require('../controllers/DiscardPointController');

const router = Router();

router.get('/discard_points', DiscardPointController.getDiscardPoints);
router.get('/discard_points/:id', DiscardPointController.getDiscardPoint);
router.post('/discard_points', DiscardPointController.createDiscardPoint);
router.put('/discard_points/:id', DiscardPointController.updateDiscardPoint);
router.delete('/discard_points/:id', DiscardPointController.deleteDiscardPoint);

module.exports = router;