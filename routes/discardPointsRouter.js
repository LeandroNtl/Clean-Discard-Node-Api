const { Router } = require('express');
const DiscardPointController = require('../controllers/DiscardPointController');

const router = Router();

router.get('/discard-points', DiscardPointController.getDiscardPoints);
router.get('/discard-points/:id', DiscardPointController.getDiscardPoint);
router.post('/discard-points', DiscardPointController.createDiscardPoint);
router.put('/discard-points/:id', DiscardPointController.updateDiscardPoint);
router.delete('/discard-points/:id', DiscardPointController.deleteDiscardPoint);

module.exports = router;