import { SlArrowDown } from "react-icons/sl";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div className="p-4 mx-[340px]">
      <div className="shadow-sm rounded-xl p-1">
        <div
          className="flex items-center justify-between hover:cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-poppins font-medium">
            {data.title} ({data.itemCards.length})
          </span>
          <SlArrowDown className="w-5 h-5 text-gray-500" />
        </div>
        <div className="mt-2">
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
