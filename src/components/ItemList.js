import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        const { name, defaultPrice, price, description, imageId } =
          item.card.info;

        return (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="border-b border-gray-300"
          >
            <div className="menu-card-container flex items-start space-x-2 my-8">
              <div className="txt-on-left flex-1">
                <div className=" font-xl font-poppins text-gray-700 font-extrabold">
                  <p>{name}</p>
                </div>
                <div>
                  <p className="menu-price my-2 font-semibold">
                    <span className="m-[2px]"> &#8377;</span>
                    {defaultPrice / 100 || price / 100}
                  </p>
                </div>
                <div>
                  <p className="mt-5 text-gray-500 mr-10 text-[15px] hover:cursor-pointer font-medium">
                    {description}
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                {imageId && (
                  <img
                    className="menu-img w-40 h-auto rounded-2xl hover:cursor-pointer"
                    alt="menu-image"
                    src={MENU_IMG_URL + imageId}
                  />
                )}
                <button
                  onClick={() => handleAddItem(item)}
                  className={`${
                    imageId ? "absolute bottom-[-20px]" : "mt-6 mr-6"
                  } w-28 bg-white text-green-600 font-bold text-lg py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200`}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
