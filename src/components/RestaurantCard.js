/**
 * The `RestaurantCard` component displays information about a restaurant including its image, name,
 * cuisines, average rating, cost for two, and delivery time.
 * @param props - The `props` parameter in the `RestaurantCard` component contains the data passed down
 * to the component from its parent component. In this case, it seems to contain the `resData` object.
 * @returns The `RestaurantCard` component is being returned. It receives `resData` as a prop, extracts
 * specific data from `resData.info`, and displays information about a restaurant such as the image,
 * name, cuisines, average rating, cost for two, and delivery time.
 */
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="rest-card">
      <img
        className="reso-img"
        alt="reso-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
