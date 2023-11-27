// ProductPage.tsx
import React from "react";
import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";
import { getRestaurants } from "../api/api";

interface ProductPageProps {
  restaurants: string[];
}

const ProductPage: React.FC<ProductPageProps> = ({ restaurants }) => {
  console.log("Restaurants:", restaurants);

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
    // Fetch user location (you may need to implement this)
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
const getUserLocation = async () => {
  return { latitude: 123.456, longitude: 789.012 }; // Replace with actual implementation
};

export default ProductPage;