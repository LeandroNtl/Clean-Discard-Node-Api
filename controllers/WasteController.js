const database = require('../models');

class WasteController {

    static async getWastes(req, res) {
        try {
            const wastes = await database.Waste.findAll();
            return res.status(200).json(wastes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getWaste(req, res) {
        const { id } = req.params;
        try {
            const waste = await database.Waste.findOne({
                where: { id: Number(id) }
            });
            return res.status(200).json(waste);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createWaste(req, res) {
        const waste = req.body;
        try {
            const newWaste = await database.Waste.create(waste);
            return res.status(200).json(newWaste);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateWaste(req, res) {
        const { id } = req.params;
        const newWaste = req.body;
        try {
            await database.Waste.update(newWaste, { where: { id: Number(id) } });
            const waste = await database.Waste.findOne({ where: { id: Number(id) } });
            return res.status(200).json(waste);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteWaste(req, res) {
        const { id } = req.params;
        try {
            await database.Waste.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `Waste with id ${id} has been deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = WasteController;