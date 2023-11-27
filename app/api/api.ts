import axios, { AxiosResponse } from 'axios';
import {
  PlacesNearbyRequest,
  PlacesNearbyResponse,
  PlacesNearbyResponseData,
  Client,
} from '@googlemaps/google-maps-services-js';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

if (!apiKey) {
  throw new Error('Google Maps API key is missing. Please provide a valid API key.');
}

const client = new Client({});

interface CustomAxiosResponse<T> extends AxiosResponse {
  data: T;
}

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

      const response: CustomAxiosResponse<PlacesNearbyResponseData> = await client.placesNearby(request);

      // Check if 'results' property exists in the response data
      if (response.data && 'results' in response.data) {
        // Extract restaurant names from the response and filter out undefined values
        const restaurantNames = response.data.results.map((result) => result.name).filter((name) => name !== undefined) as string[];
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