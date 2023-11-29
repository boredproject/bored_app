"use client";

import React, { useEffect, useState } from "react";
import { getUserLocation, getRestaurants} from "../api/api";

import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";
import "./ProductPage.css";
import Modal from "./component/Modal";

interface Restaurant {
  name: string;
  distance: string; // Modifier le type de distance à string
}

const ProductPage: React.FC = () => {

  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [restaurants, setRestaurants] = useState<string[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRestaurantClick = (restaurant: string) => {
    setSelectedRestaurant(restaurant);
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

          // Mise à jour pour inclure la distance dans les résultats
          const restaurantsWithDistance: Restaurant[] = nearbyRestaurants.results.map(
              (restaurant) => ({
                name: restaurant.name,
                distance: restaurant.distance.toFixed(2), // Arrondir à deux décimales
              })
          );

          setRestaurants(restaurantsWithDistance);
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
        <div className="border-2 border-[#5E2BFF] rounded-lg w-full h-2/4 overflow-y-auto scrollbar-style">
          <table className="border-[#5E2BFF] border-separate border-spacing-4 rounded-lg w-full">
            <tbody className="rounded-lg space">
              {restaurants ? (
                restaurants.map((restaurant, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#5E2BFF] transition duration-500"
                    onClick={() => handleRestaurantClick(restaurant)}
                  >
                    <td className="border-2 border-[#5E2BFF] rounded p-2">
                          {`${restaurant.name} - ${restaurant.distance} km`}
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
