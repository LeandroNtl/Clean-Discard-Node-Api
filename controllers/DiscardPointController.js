const database = require('../models');

class DiscardPointController {

    static async getDiscardPoints(req, res) {
        try {
            const allDiscardPoints = await database.DiscardPoint.findAll({ where: { status: "ativo" } });
            return res.status(200).json(allDiscardPoints);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async getDiscardPoint(req, res) {
        const { id } = req.params;
        try {
            const discardPoint = await database.DiscardPoint.findOne({
                where: { id: Number(id) }
            });
            return res.status(200).json(discardPoint);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async createDiscardPoint(req, res) {

        const { name, description, latitude, longitude, status, evaluation } = req.body;

        const discardPoint = await database.DiscardPoint.findOne({
            where: { name: name }
        });

        if (discardPoint) {
            return res.status(400).json({ error: "Ponto de descarte já cadastrado" })
        }

        const allDiscardPoints = await database.DiscardPoint.findAll();
        const distance = 0.0005;
        const isNear = allDiscardPoints.some((point) => {
            return (
                (point.latitude >= latitude - distance && point.latitude <= latitude + distance) &&
                (point.longitude >= longitude - distance && point.longitude <= longitude + distance)
            )
        })

        if (isNear) {
            return res.status(400).json({ error: "Já existe um ponto de descarte próximo a este" })
        }

        try {

            const discardPoint = await database.DiscardPoint.create({
                name,
                description,
                latitude,
                longitude,
                status: status || "Em análise",
                evaluation: evaluation || 0,
            });

            return res.status(200).json(discardPoint);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }
    
    static async updateDiscardPoint(req, res) {
        const { id } = req.params;
        const newData = req.body;
        try {
            await database.DiscardPoint.update(newData, { where: { id: Number(id) } });
            const updatedDiscardPoint = await database.DiscardPoint.findOne({ where: { id: Number(id) } });
            return res.status(200).json(updatedDiscardPoint);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
    static async deleteDiscardPoint(req, res) {
        const { id } = req.params;
        try {
            await database.DiscardPoint.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `DiscardPoint ${id} deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    
}

module.exports = DiscardPointController;