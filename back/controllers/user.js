const userServices = require("../services/userService");
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');


exports.user = async (req, res) => {
    const { email } = req.body.body;

    try {
        const user = await userServices.findUser(email);

        const token = jwt.sign({
            id: user._id,
            email: user.email
        }, SECRET, { expiresIn: '3 hours' })

        // si un user et trouvé on le renvoi avec le token
        if (user.length) res.status(200).send({ user, token });

        if (!user.length) res.status(401).send({ user, message: 'email n\'est pas dans la base de donnée' });


    } catch (e) {
        res.status(400).send('erreur' + e);
    }
}