import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams();
 
  

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      {MENU_API_URL}+resId
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
  const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage = resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h1>Menu</h1>
      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}-{"Rs."}
            {item.card.info.price /100 || item.card.info.defaultPrice/100}</li>
          ))
        ) : (
          <li>No items available</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
