import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {

    const [resInfo,setResInfo]=useState(null);

    useEffect(() => {
       fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9717208&lng=77.6006245&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
     
        setResInfo(json.data);
        
        
    }
    
    if(resInfo==null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[2]?.card?.card?.info;
    
    const { itemCards } =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
      console.log(itemCards);
 return (
  <div className="menu">
    <h1>{name}</h1>
    <h2>{cuisines.join(",")}</h2>
    <h2>{costForTwoMessage}</h2>
    <h2>Menu</h2>
    <ul>
     {itemCards.map(item => <li>{item.card.info.name}</li>)}
    </ul>
  </div>
);
}

export default RestaurantMenu;
