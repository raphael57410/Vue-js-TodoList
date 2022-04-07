const verifyParams = (req, res, next) => {
    console.log(req.params);
    if (req.paramas.id == 0) {
        res.status(400).json({ error: 'un paramétre est manquant' })
    } else {
        next();
    }
}
module.exports = verifyParams;