import { CDN_URL } from "../utils/constants";
import RatingSVG from "./RatingSVG";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    resData?.info;

  const { slaString } = resData?.info?.sla;
  return (
    <div className="m-2 p-2 w-[250px] h-[360px] bg-gray-400">
      <img
        className=""
        alt="resto-img"
        height={182}
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="mx-1 my-4 max-w-xl overflow-hidden">
        <span className="font-semibold text-xl font-serif truncate">
          {name}
        </span>
      </div>
      <RatingSVG />
      <div className="mt-[-22px]">
        <span className="ml-6 mr-7">{avgRating}</span>
        {slaString}
      </div>
      <div className="mt-3">{cuisines.join(", ")}</div>
      <div className="mt-2">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
