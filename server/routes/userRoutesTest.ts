const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const User = require('../models/user'); // Assurez-vous que ce chemin est correct

// Route pour obtenir les informations du profil utilisateur
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        // L'ID de l'utilisateur peut être obtenu à partir de req.user, qui est défini dans le middleware
        const user = await User.findById(req.user.userId); 

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        res.json({ email: user.email, username: user.username }); // Envoie des informations pertinentes
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Autres routes protégées peuvent être ajoutées ici

module.exports = router;
