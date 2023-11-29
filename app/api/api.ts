// api.ts

import axios from 'axios';

interface UserLocationResponse {
  location: {
    lat: number;
    lng: number;
  };
}

interface Restaurant {
  name: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  distance: number;
}

interface PlacesNearbyResponseData {
  results: Restaurant[];
}

export const getUserLocation = async (): Promise<UserLocationResponse> => {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const userLocationResponse: UserLocationResponse = {
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      };
      console.log('User Location Response:', userLocationResponse);
      resolve(userLocationResponse);
    });
  });
};

export const getRestaurants = async (latitude: number, longitude: number): Promise<PlacesNearbyResponseData> => {
  try {
    const response = await axios.get<PlacesNearbyResponseData>(
        'http://localhost:3001/api/places',
        {
          params: {
            latitude,
            longitude,
          },
        }
    );

    console.log('API Response:', response.data);

    const responseData = response.data;

    if (responseData && 'results' in responseData) {
      // Ajouter la distance à chaque résultat
      const resultsWithDistance = responseData.results.map((result) => {
        const distance = calculateDistance(latitude, longitude, result.geometry.location.lat, result.geometry.location.lng);
        return { ...result, distance };
      });

      return { ...responseData, results: resultsWithDistance };
    } else {
      throw new Error('Results property not found in the API response');
    }
  } catch (error) {
    console.error('Error fetching restaurants', error);
    throw error;
  }
};

export const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number => {
  const R = 6371; // Earth radius in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};
