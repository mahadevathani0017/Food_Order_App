import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, error } = useRestaurantMenu(resId);

  // console.log("resInfo:", resInfo); // Debug log to inspect the full response

  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // console.log("regularCards:", regularCards);
  console.log(
    resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const itemCards =
    regularCards.find((card) => card?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];

  const categories = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(categories);
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
