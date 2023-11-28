const database = require('../models');

class DiscardPointController {

    static async getDiscardPoints(req, res) {
        try {
        const allDiscardPoints = await database.DiscardPoint.findAll();
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
        const discardPoint = req.body;
        try {
        const createdDiscardPoint = await database.DiscardPoint.create(discardPoint);
        return res.status(201).json(createdDiscardPoint);
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