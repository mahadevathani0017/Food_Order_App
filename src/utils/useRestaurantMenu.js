/**
 * The `useRestaurantMenu` custom hook fetches restaurant menu data based on a given restaurant ID
 * using React's `useEffect` and `useState` hooks.
 * @param resId - The `resId` parameter in the `useRestaurantMenu` custom hook represents the unique
 * identifier of a restaurant. This identifier is used to fetch the menu data for that specific
 * restaurant from the API endpoint defined in the `MENU_API_URL` constant.
 * @returns The `useRestaurantMenu` custom hook is returning the `resInfo` state variable, which
 * contains the data fetched from the MENU_API_URL for a specific restaurant ID (`resId`).
 */
import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";
const useRestaurantMenu=(resId)=>{
    //fetchData
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData=async()=>{
        const data = await fetch(MENU_API_URL+resId);
        const json=await data.json();
        setResInfo(json.data);
    }

    return resInfo;
};

export default useRestaurantMenu;

