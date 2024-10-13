import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9717208&lng=77.6006245&restaurantId=10575&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
  };

  
  const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage = resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <h2>{costForTwoMessage}</h2>
      <h1>Menu</h1>
      <ul>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
