/**
 * Documentation
 * The `RestaurantMenu` component fetches and displays restaurant menu information based on the
 * provided restaurant ID.
 * @returns The `RestaurantMenu` component is being returned. It fetches menu data based on the `resId`
 * parameter from the URL, displays a loading shimmer component while fetching data, and then renders
 * the restaurant name, cuisines, cost for two, and a list of menu items with their names and prices.
 * If there are no items available, it displays a message "No items available".
 */

import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  

  const { resId } = useParams();
  const resInfo=useRestaurantMenu(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(`${MENU_API_URL}${resId}`);
      const json = await data.json();
      console.log("Fetched Data:", json); 
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };


  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  console.log("Item Cards:", itemCards);

  const name = resInfo?.cards?.[2]?.card?.card?.info?.name;
  const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines;
  const costForTwoMessage =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage;

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
    </div>
  );
};

export default RestaurantMenu;
