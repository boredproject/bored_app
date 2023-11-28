// ProductPage.tsx
'use client';
import React, { useEffect, useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { getUserLocation, getRestaurants } from "../api/api";  // Import specific functions
import IdeaButton from "../selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton";

const ProductPage: React.FC = () => {
  const [restaurants, setRestaurants] = useState<string[] | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userLocationResponse = await getUserLocation();
        setUserLocation({
          lat: userLocationResponse.location.lat,
          lng: userLocationResponse.location.lng,
        });

        const nearbyRestaurants = await getRestaurants(
            userLocationResponse.location.lat,
            userLocationResponse.location.lng
        );
        setRestaurants(nearbyRestaurants);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className="flex justify-between">
        <div className="flex justify-center items-center px-5">
          <div>
            <IdeaButton type="svg1" textspin="spinnersvg1" />
          </div>
          {userLocation && (
              <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                <GoogleMap
                    center={{ lat: userLocation.lat, lng: userLocation.lng }}
                    zoom={15}
                    mapContainerStyle={{ width: "400px", height: "400px" }}
                >
                  {userLocation && <Marker position={{ lat: userLocation.lat, lng: userLocation.lng }} />}
                </GoogleMap>
              </LoadScript>
          )}
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
