require('dotenv').config();

const express = require('express');
const cors = require('cors');
const authRoutes = require('./server/routes/authRoutes');
const app = express();


app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

// app.post('/api/auth/register', (req, res) => {
//   res.status(201).json({ message: "Utilisateur créé avec succès" });
// });

const connectDb = require('./server/database/db');

const port = 3001;
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

// middleware pour la gestion des erreurs 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Une erreur est survenue !');
  });
  
  app.use('/api/auth', require('./routes/authRoutes'));