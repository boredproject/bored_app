import axios, { AxiosResponse } from 'axios';

const { NEXT_PUBLIC_GOOGLE_MAPS_API_KEY } = process.env;

interface RestaurantResponse {
  results: {
    name: string;
    // Add other properties you want to use
  }[];
}

interface LocationResponse {
  location: {
    lat: number;
    lng: number;
  };
}

const api = {
  getNearbyRestaurants: async (latitude: number, longitude: number): Promise<RestaurantResponse> => {
    try {
      const response: AxiosResponse<RestaurantResponse> = await axios.get(
        'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        {
          params: {
            location: `${latitude},${longitude}`,
            radius: 500,
            type: 'restaurant',
            key: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching nearby restaurants', error);
      throw error;
    }
  },

  getUserLocation: async (): Promise<LocationResponse> => {
    try {
      const response: AxiosResponse<LocationResponse> = await axios.post(
        'https://www.googleapis.com/geolocation/v1/geolocate',
        {},
        {
          params: {
            key: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching user location', error);
      throw error;
    }
  },
};

export default api;