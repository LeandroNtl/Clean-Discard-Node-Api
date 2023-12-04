const database = require('../models');
const { compare } = require("bcryptjs");
const { sign, verify } = require("jsonwebtoken");
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
                { expiresIn: 8000 }
            )

            return res.status(200).json({ token: token, id: user.id });

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

    static async verifyToken(req, res) {

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ error: "Token não encontrado" })
        }

        const [bearer, userToken] = token.split(" ");

        try {

            const decoded = verify(userToken, jsonSecret.secret);

            const { id, email } = decoded;

            return res.status(200).send({ valid: true, id: id, email: email });

        } catch (error) {
            return res.status(401).send({ valid: false });
        }

    }

}

module.exports = AuthController;