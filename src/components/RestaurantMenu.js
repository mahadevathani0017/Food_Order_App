import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constants";


const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${MENU_API_URL}${resId}`);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
      console.log("Full Response Data:", json);
      setResInfo(json?.data || null);
    } catch (error) {
      console.error("Error fetching menu:", error);
      setError("Failed to fetch menu data.");
    }
  };

  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCards =
    regularCards.find((card) => card?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];

  const name =
    resInfo?.cards?.[2]?.card?.card?.info?.name || "Unknown Restaurant";
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
  const costForTwoMessage =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage ||
    "Cost info unavailable";

  return (
    <div className="menu">
      {resInfo === null && !error ? (
        <Shimmer />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <h1>{name}</h1>
          <p>
            {cuisines?.join(", ")} - {costForTwoMessage}
          </p>
          <h1>Menu</h1>
          <ul>
            {itemCards.length > 0 ? (
              itemCards.map((item) => (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} - {"Rs."}
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </li>
              ))
            ) : (
              <li>No items available</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default RestaurantMenu;
