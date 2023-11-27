const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // Pas de token, non autorisé

    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403); // Token invalide ou expiré

        // Ajoute l'utilisateur au request object
        req.user = user;

        next(); // Passe au prochain middleware
    });
}

module.exports = authenticateToken;
