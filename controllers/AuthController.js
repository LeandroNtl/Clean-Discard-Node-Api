const database = require('../models');
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const jsonSecret = require("../config/secret");

class AuthController {

    static async login(req, res) {
        try {

            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: "Preencha todos os campos" })
            }

            const user = await database.User.findOne({
                atributtes: ["id", "email", "password"],
                where: { email: email }
            });

            if (!user) {
                return res.status(400).json({ error: "Email não cadastrado" })
            }

            const comparePassword = await compare(password, user.password)

            if (!comparePassword) {
                return res.status(400).json({ error: "Senha incorreta" })
            }

            const token = sign(
                { id: user.id }, 
                jsonSecret.secret, 
                { expiresIn: "86400" }
            )

            return res.status(200).json({ token: token });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async logout(req, res) {
        try {
            return res.status(200).json({ message: "Logout realizado com sucesso" });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = AuthController;