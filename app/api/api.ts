// api.ts

import axios from 'axios';
require('dotenv').config();

interface PlacesNearbyResponseData {
  results: {
    name: string;
    // Add other properties as needed
  }[];
  // Add other properties as needed
}

export const getRestaurants = async (latitude: number, longitude: number): Promise<string[]> => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    throw new Error('Google Maps API key is missing. Please provide a valid API key.');
  }

  try {
    const response = await axios.get<PlacesNearbyResponseData>(
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

    console.log("API Response Status:", response.status);

    const responseData = response.data;
    console.log("API Response Data:", responseData);

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
};
