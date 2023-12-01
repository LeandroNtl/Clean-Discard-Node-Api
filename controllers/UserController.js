const database = require('../models');
const { hash } = require("bcryptjs")
// const uuid = require("uuid")

class UserController {

    static async getUsers(req, res) {
        try {
            const users = await database.User.findAll();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getUser(req, res) {
        const { id } = req.params;
        try {
            const user = await database.User.findOne({
                where: { id: Number(id) }
            });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createUser(req, res) {
        try {

            const { name, username, email, password, confirmPassword, status, role, score } = req.body;

            const user = await database.User.findOne({
                where: { email: email }
            });

            if (user) {
                return res.status(400).json({ error: "Email já cadastrado" })
            }

            if (password.length < 8) {
                return res.status(400).json({ error: "A senha deve ter no mínimo 8 caracteres" })
            }

            if (password !== confirmPassword) {
                return res.status(400).json({ error: "As senhas não coincidem" })
            }

            const passwordHash = await hash(password, 8)

            const newUser = await database.User.create({
                name,
                username: username || name,
                email,
                password: passwordHash,
                status: status || true,
                role: role || "2",
                score: score || 0,
            });

            return res.status(200).json(newUser);

        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async updateUser(req, res) {
        
        try {
            const { id } = req.params;
            const [updated] = await database.User.update(req.body, {
                where: { id: Number(id) }
            });
            if (updated) {
                const updatedUser = await database.User.findOne({ where: { id: Number(id) } });
                return res.status(200).json(updatedUser);
            }
            throw new Error('User not found');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;
        try {
            await database.User.destroy({ where: { id: Number(id) } });
            return res.status(200).json({ message: `User with id ${id} has been deleted` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = UserController;