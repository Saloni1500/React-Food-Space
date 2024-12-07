import RatingSVG from "./RatingSVG";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestautrantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { ResInfo = {}, isLoading } = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(0);
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = ResInfo?.cards?.[2]?.card?.card?.info || {};

  const { slaString } = ResInfo?.cards?.[2]?.card?.card?.info?.sla || {};

  const { itemCards } =
    ResInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  const categories =
    ResInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  if (isLoading) {
    return <MenuShimmer />;
  }

  return (
    <div className="">
      <h1 className="text-center font-serif text-4xl m-6">{name}</h1>

      <div className="flex flex-col h-auto rounded-xl border-solid mx-[350px] shadow-2xl space-y-2 p-4 text-left">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <RatingSVG />
            <p>
              {avgRatingString} ({totalRatingsString})
            </p>
          </div>
          <p>{costForTwoMessage}</p>
        </div>

        <p className="font-serif underline hover:cursor-pointer">
          {Array.isArray(cuisines) ? cuisines.join(", ") : " "}
        </p>

        <p className="font-serif">
          Outlet <span className="out-txt text-gray-400 mx-3">{areaName}</span>
        </p>

        <p>{slaString.toLowerCase()}</p>
      </div>

      <div className="flex justify-center my-10 font-serif bg-gray-500 text-white mx-[350px] rounded-2xl h-8 p-1">
        <p className="">MENU</p>
      </div>
      <div className="my-2">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setshowIndex={() => {
              setshowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
