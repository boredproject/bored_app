// api.ts
import axios from 'axios';

interface UserLocationResponse {
  location: {
    lat: number;
    lng: number;
  };
}

interface PlacesNearbyResponseData {
  results: {
    name: string;
  }[];
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

export const getRestaurants = async (latitude: number, longitude: number): Promise<string[]> => {
  try {
    const response = await axios.get<{ results: { name: string }[] }>(
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
      return responseData.results
          .map((result) => result.name)
          .filter((name) => name !== undefined) as string[];
    } else {
      throw new Error('Results property not found in the API response');
    }
  } catch (error) {
    console.error('Error fetching restaurants', error);
    throw error;
  }
};
