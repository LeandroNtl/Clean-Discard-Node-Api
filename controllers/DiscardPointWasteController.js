const database = require('../models');

class DiscardPointWasteController {

    static async getDiscardPointWastes(req, res) {
        try {
            const discardPointWastes = await database.DiscardPointWaste.findAll();
            return res.status(200).json(discardPointWastes);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getDiscardPointWaste(req, res) {
        const { id } = req.params;
        try {
            const discardPointWaste = await database.DiscardPointWaste.findOne({
                where: { id: Number(id) }
            });
            return res.status(200).json(discardPointWaste);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createDiscardPointWaste(req, res) {
        const discardPointWaste = req.body;
        try {
            const newDiscardPointWaste = await database.DiscardPointWaste.create(discardPointWaste);
            return res.status(200).json(newDiscardPointWaste);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateDiscardPointWaste(req, res) {
        const { id } = req.params;
        const newDiscardPointWaste = req.body;
        try {
            await database.DiscardPointWaste.update(newDiscardPointWaste, { where: { id: Number(id) } });
            const discardPointWaste = await database.DiscardPointWaste.findOne({ where: { id: Number(id) } });
            return res.status(200).json(discardPointWaste);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteDiscardPointWaste(req, res) {
        const { id } = req.params;
        try {
            await database.DiscardPointWaste.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `DiscardPointWaste with id ${id} has been deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = DiscardPointWasteController;