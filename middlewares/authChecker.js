const { verify, decode } = require("jsonwebtoken")
const jsonSecret = require("../config/secret.js")

module.exports = async (req, res, next) => {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({ error: "Token não encontrado" })
    }

    const [bearer, token] = authToken.split(" ");

    try {

        verify(token, jsonSecret.secret);

        const { id, email } = await decode(token);
        req.userId = id;
        req.userEmail = email;

        return next();

    } catch (error) {
        return res.status(401).json({ error: "Token inválido" })
    }

}