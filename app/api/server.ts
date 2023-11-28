import express from 'express';
import axios from 'axios';
import cors from 'cors'; // Import cors

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.get('/api/places', async (req, res) => {
    const { latitude, longitude } = req.query;
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    try {
        const response = await axios.get(
            'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
            {
                params: {
                    location: `${latitude},${longitude}`,
                    radius: 1000, // Adjust the radius as needed
                    type: 'restaurant',
                    key: apiKey,
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching restaurants', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
