import React, { useEffect, useState } from "react";
import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";
import api from "../api/api"
import axios from "axios";

const ProductPage: React.FC = () => {
    const [restaurants, setRestaurants] = useState<string[] | null>(null);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Use the api module to fetch restaurants based on location
            const location = await getUserLocation(); // Implement getUserLocation function
            const response = await api.getRestaurants(location.latitude, location.longitude);
            
            // Check if response is an array of strings
            if (Array.isArray(response)) {
              setRestaurants(response);
            } else {
              console.error('Invalid response format', response);
            }
          } catch (error) {
            console.error('Error fetching data', error);
          }
        };
      
        fetchData();
      }, []);
      
  
    const getUserLocation = async () => {
      // Simulate fetching user location
      return { latitude: 123.456, longitude: 789.012 };
    };
  
    return (
      <div className="flex justify-between">
        <div className="flex justify-center items-center px-5">
          <div>
            <IdeaButton type="svg1" textspin="spinnersvg1" />
          </div>
          <div className="border-2 border-[#5E2BFF] p-2 rounded-lg">
            <table className="border-[#5E2BFF] border-separate border-spacing-2 rounded-lg">
              <tbody className="border-spacing-2 rounded-lg">
                {restaurants ? (
                  restaurants.map((restaurant, index) => (
                    <tr key={index}>
                      <td className="border-2 border-[#5E2BFF] rounded p-2">{restaurant}</td>
                      {/* Add other restaurant information as needed */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border-2 border-[#5E2BFF] rounded p-2">Loading...</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductPage;