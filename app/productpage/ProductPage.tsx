// ProductPage.tsx
import React from "react";
import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";
import { getRestaurants } from "../api/api";
import axios from "axios";

interface ProductPageProps {
  restaurants: string[];
}

const ProductPage: React.FC<ProductPageProps> = ({ restaurants }) => {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center items-center px-5">
        <div>
          <IdeaButton type="svg1" textspin="spinnersvg1" />
        </div>
        <div className="border-2 border-[#5E2BFF] p-2 rounded-lg">
          <table className="border-[#5E2BFF] border-separate border-spacing-2 rounded-lg">
            <tbody className="border-spacing-2 rounded-lg">
              {restaurants && restaurants.length > 0 ? (
                restaurants.map((restaurant, index) => (
                  <tr key={index}>
                    <td className="border-2 border-[#5E2BFF] rounded p-2">{restaurant}</td>
                    {/* Add other restaurant information as needed */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="border-2 border-[#5E2BFF] rounded p-2">
                    {restaurants ? 'No restaurants found' : 'Loading...'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    // Fetch user location using ipinfo.io
    const location = await getUserLocation();

    console.log("User Location:", location);

    // Fetch restaurants using the server-side API function
    const restaurants = await getRestaurants(location.latitude, location.longitude);

    console.log("Fetched Restaurants:", restaurants);

    return {
      props: { restaurants: restaurants || [] }, // Ensure that restaurants is an array
    };
  } catch (error) {
    console.error('Error fetching data', error);
    return {
      props: { restaurants: [] }, // Provide an empty array in case of an error
    };
  }
};

// Simulate fetching user location
const getUserLocation = async (): Promise<{ latitude: number; longitude: number }> => {
  try {
    const response = await axios.get('https://ipinfo.io/json');
    const data = response.data;

    if (data.loc) {
      const [latitude, longitude] = data.loc.split(',').map(Number);
      return { latitude, longitude };
    } else {
      throw new Error('Location data not available');
    }
  } catch (error) {
    console.error('Error getting user location:', error);
    throw error;
  }
};

export default ProductPage;
