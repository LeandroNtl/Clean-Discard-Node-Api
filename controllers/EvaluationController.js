const database = require('../models');

class EvaluationController {
    
    static async getEvaluations(req, res) {
        try {
            const evaluations = await database.Evaluation.findAll();
            return res.status(200).json(evaluations);
        } catch (error) {
            return res.status(500).json({ error: "Não foi possível listar as avaliações" });
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
            return res.status(500).json({ error: "'Não foi possível listar a avaliação" });
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

                const newAverage = average.toFixed(2);

                await database.DiscardPoint.update({ evaluation: newAverage }, { where: { id: Number(discard_point_id) } });

            } catch (error) {
                return res.status(500).json({ error: "Não foi possível atualizar a avaliação do ponto de descarte" });
            }

            try {
                await database.User.update({ score: user.score + 1 }, { where: { id: Number(user_id) } });
            } catch (error) {
                return res.status(500).json({ error: "Não foi possível atualizar a pontuação do usuário" });
            }

            return res.status(200).json({ message: "Avaliação criada com sucesso", newEvaluation });

        } catch (error) {

            return res.status(500).json({ error: "Não foi possível criar a avaliação " });

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
            return res.status(500).json({ error: "Não foi possível atualizar a avaliação" });
        }
    }

    static async deleteEvaluation(req, res) {
        const { id } = req.params;
        try {
            await database.Evaluation.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Evaluation with id ${id} has been deleted` });
        } catch (error) {
            return res.status(500).json({ error: "Não foi possível deletar a avaliação" });
        }
    }

}

module.exports = EvaluationController;