import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-200 border-b-2 flex items-center"
        >
          
          <div className="flex-1 pr-4 text-left">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <span className="ml-2 text-gray-700">
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item.card.info.description}
            </p>
          </div>

          
          <div className="w-24 h-24 flex-shrink-0 relative">
            <img
              src={`${CDN_URL}${item?.card?.info?.imageId}`}
              
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute bottom-1 right-1 p-1 bg-white shadow-lg rounded-md text-xs">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
