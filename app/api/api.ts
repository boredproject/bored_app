// api.ts
import {
  PlacesNearbyRequest,
  PlacesNearbyResponseData,
  Client,
} from '@googlemaps/google-maps-services-js';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  throw new Error('Google Maps API key is missing. Please provide a valid API key.');
}

const client = new Client({});

const api = {
  getRestaurants: async (latitude: number, longitude: number): Promise<string[]> => {
    try {
      const request: PlacesNearbyRequest = {
        params: {
          location: `${latitude},${longitude}`,
          radius: 500,
          type: 'restaurant',
          key: apiKey,
        },
      };

      // Flatten the parameters for constructing URL manually
      const params = Object.entries(request.params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      // Construct the URL manually
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${params}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData: PlacesNearbyResponseData = await response.json();

      // Check if 'results' property exists in the response data
      if (responseData && 'results' in responseData) {
        // Extract restaurant names from the response and filter out undefined values
        const restaurantNames = responseData.results
          .map((result) => result.name)
          .filter((name) => name !== undefined) as string[];
        return restaurantNames;
      } else {
        throw new Error('Results property not found in the API response');
      }
    } catch (error) {
      console.error('Error fetching restaurants', error);
      throw error;
    }
  },
};

export default api;
