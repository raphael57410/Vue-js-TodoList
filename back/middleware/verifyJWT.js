const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers.authorization.split(' ');

    // Véracité du token
    const tokenValid = jwt.verify(token[1], SECRET, (err) => {
        if (err) return false;
        return true
    });

    // si le token est valide on passe à la fonction suivante avec next()
    // pour recupérer toutes les tâches
    if (!tokenValid) {
        res.status(400).json({ error: 'un paramétre est manquant' })
    } else {
        next();
    }
}
module.exports = verifyJWT;