// server.ts
import express, { Request, Response } from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', async (req: Request, res: Response) => {
  try {
    const url = `https://maps.googleapis.com${req.url}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erreur dans le serveur mandataire :', error);
    res.status(500).send('Erreur dans le serveur mandataire.');
  }
});

app.listen(port, () => {
  console.log(`Serveur mandataire en écoute sur http://localhost:${port}`);
});
