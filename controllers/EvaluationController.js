const database = require('../models');

class EvaluationController {
    
    static async getEvaluations(req, res) {
        try {
            const evaluations = await database.Evaluation.findAll();
            return res.status(200).json(evaluations);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getEvaluation(req, res) {
        const { id } = req.params;
        try {
            const evaluation = await database.Evaluation.findOne({
                where: { id: Number(id) }
            });
            return res.status(200).json(evaluation);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createEvaluation(req, res) {

        const evaluation = req.body;
        const discard_point_id = evaluation.discard_point_id;
        const user_id = evaluation.user_id;

        const discard_point = await database.DiscardPoint.findOne({
            where: { id: Number(discard_point_id) }
        });
        const user = await database.User.findOne({
            where: { id: Number(user_id) }
        });

        try {

            const newEvaluation = await database.Evaluation.create(evaluation);

            try {

                const evaluations = await database.Evaluation.findAll({
                    where: { discard_point_id: Number(discard_point_id) }
                });

                let sum = 0;

                for (let i = 0; i < evaluations.length; i++) {
                    sum += evaluations[i].score;
                }

                const average = sum / evaluations.length;

                await database.DiscardPoint.update({ evaluation: average }, { where: { id: Number(discard_point_id) } });

            } catch (error) {
                return res.status(500).json(error.message);
            }

            try {
                await database.User.update({ score: user.score + 1 }, { where: { id: Number(user_id) } });
            } catch (error) {
                return res.status(500).json(error.message);
            }


            return res.status(200).json(newEvaluation);

        } catch (error) {

            return res.status(500).json(error.message);

        }
    }

    static async updateEvaluation(req, res) {
        const { id } = req.params;
        const newEvaluation = req.body;
        try {
            await database.Evaluation.update(newEvaluation, { where: { id: Number(id) } });
            const evaluation = await database.Evaluation.findOne({ where: { id: Number(id) } });
            return res.status(200).json(evaluation);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteEvaluation(req, res) {
        const { id } = req.params;
        try {
            await database.Evaluation.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Evaluation with id ${id} has been deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = EvaluationController;