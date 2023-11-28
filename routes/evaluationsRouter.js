const { Router } = require('express');
const EvaluationController = require('../controllers/EvaluationController');

const router = Router();

router.get('/evaluations', EvaluationController.getEvaluations);
router.get('/evaluations/:id', EvaluationController.getEvaluation);
router.post('/evaluations', EvaluationController.createEvaluation);
router.put('/evaluations/:id', EvaluationController.updateEvaluation);
router.delete('/evaluations/:id', EvaluationController.deleteEvaluation);

module.exports = router;