require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const connectDb = require('./db');

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Serveur lancé sur le port ${port}`);
});

// middleware pour la gestion des erreurs 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Une erreur est surevenue !');
  });
  