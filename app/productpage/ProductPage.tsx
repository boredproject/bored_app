// ProductPage.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { getUserLocation, getRestaurants } from '../api/api';
import IdeaButton from '../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton';

const ProductPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userLocationResponse = await getUserLocation();
        console.log('User Location Response:', userLocationResponse);

        // Ajout d'un bloc try-catch pour gérer les erreurs spécifiques à cette promesse
        try {
          const nearbyRestaurants = await getRestaurants(
              userLocationResponse.location.lat,
              userLocationResponse.location.lng
          );
          console.log('Nearby Restaurants:', nearbyRestaurants);

          setRestaurants(nearbyRestaurants);
        } catch (error) {
          console.error('Error in getRestaurants promise:', error);
          // Vous pouvez ajouter un traitement d'erreur supplémentaire ici si nécessaire
        }
      } catch (error) {
        console.error('Error fetching data', error);
        // Vous pouvez afficher un message d'erreur à l'utilisateur ici si nécessaire
      }
    };

    fetchData().then(); // Explicitly use .then() to indicate that the promise is being used

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs once on mount

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
