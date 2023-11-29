"use client";

import React, { useEffect, useState } from "react";
import { getUserLocation, getRestaurants} from "../api/api";

import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";
import "./ProductPage.css";
import Modal from "./component/Modal";

interface Restaurant {
  name: string;
  distance: string;
    rating: number;
}

const ProductPage: React.FC = () => {

  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant.name); // Assuming you want to set the name as the selected restaurant
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRestaurant(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userLocationResponse = await getUserLocation();
        console.log("User Location Response:", userLocationResponse);

        try {
          const nearbyRestaurants = await getRestaurants(
              userLocationResponse.location.lat,
              userLocationResponse.location.lng
          );
          console.log("Nearby Restaurants:", nearbyRestaurants);

          const restaurantsWithRating: Restaurant[] = nearbyRestaurants.results.map(
              (restaurant) => ({
                name: restaurant.name,
                rating: restaurant.rating,
                distance: restaurant.distance.toFixed(0),
              })
          );

          setRestaurants(restaurantsWithRating);
        } catch (error) {
          console.error("Error in getRestaurants promise:", error);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData().then();
  }, []);

  return (
      <div className="flex justify-between w-full h-screen">
        <div className="flex justify-between items-center px-5 w-full">
          <div>
            <IdeaButton type="svg1" textspin="spinnersvg1" />
          </div>
          <div className="border-4 border-[#5E2BFF] rounded-lg w-full h-2/4 overflow-y-auto scrollbar-style">
            <table className="border-[#5E2BFF] border-separate border-spacing-4 rounded-lg w-full">
              <tbody className="rounded-lg space">
              {restaurants ? (
                  restaurants.map((restaurant, index) => (
                      <tr key={index}
                        onClick={() => handleRestaurantClick(restaurant)}>
                        <td className="flex justify-between felx-col border-4 border-[#5E2BFF] rounded p-2 text-center-+ hover:bg-[#5E2BFF] transition duration-500 font-bold text-3xl uppercase items-center">
                          {restaurant.name}
                          <div className="flex justify-between border-4 border-[#5E2BFF] rounded p-2 w-1/12 text-center uppercase">
                            {restaurant.rating}
                            <figure>
                              <svg width="32" height="32" viewBox="0 0 181 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M43.1208 154.015L40.9906 163.224L49.084 158.342L90.5002 133.358L131.916 158.342L140.01 163.224L137.88 154.015L126.98 106.894L163.537 75.1994L170.677 69.0093L161.263 68.1921L112.963 63.9994L94.1846 19.5678L90.5002 10.8501L86.8157 19.5678L68.0371 63.9994L19.7376 68.1921L10.3233 69.0093L17.4632 75.1994L54.0208 106.894L43.1208 154.015Z" fill="#181818" stroke="#5E2BFF" strokeWidth="8"/>
                            </svg>
                            </figure>


                          </div>
                        </td>
                        <td className="border-4 border-[#5E2BFF] rounded p-2 w-1/12 text-center  hover:bg-[#5E2BFF] transition duration-500 font-bold text-3xl">
                          {restaurant.distance}m
                        </td>
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
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          name={selectedRestaurant || ""}
          hours={null}
          address={null}
          desc={null}
        />
      )}
    </div>
  );
};

export default ProductPage;
