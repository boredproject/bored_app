// api.ts
import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

// Example: Mocking a GET request for restaurants based on location
mock.onGet('/api/restaurants').reply(200, { data: ['Restaurant 1', 'Restaurant 2'] });

// Define the data structure for your API response
interface RestaurantResponse {
  data: string[];
}

const api = {
  // Function to fetch restaurants based on location
  getRestaurants: async (latitude: number, longitude: number): Promise<RestaurantResponse> => {
    try {
      // Simulate an asynchronous API call
      const response: AxiosResponse<RestaurantResponse> = await axios.get('/api/restaurants', {
        params: { latitude, longitude },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching restaurants', error);
      throw error;
    }
  },
};

export default api;
