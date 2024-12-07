import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Game from "./Game";

const Body = () => {
  const [SearchText, setSearchText] = useState("");
  const { listofRestaurants, FilteredRestaurant, setFilteredRestaurant } =
    useRestaurantCard();
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <Game />;
  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" m-5 p-4">
          <input
            type="text"
            className="p-4 border border-solid border-gray-300 w-72 rounded-tl-2xl rounded-bl-2xl h-10 font-roboto ml-9"
            placeholder=" Search for restaurant and food"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 bg-slate-100 rounded-tr-2xl rounded-br-2xl h-10 font-roboto"
            onClick={() => {
              const filteredRestaurant = listofRestaurants.filter((res) => {
                const cuisines = Array.isArray(res.info.cuisines)
                  ? res.info.cuisines.join(", ")
                  : res.info.cuisines;
                return (
                  res.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase()) ||
                  cuisines.toLowerCase().includes(SearchText.toLowerCase())
                );
              });
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-5 p-4">
          <button
            className="px-6 py-2 bg-slate-100 rounded-2xl text-base"
            onClick={() => {
              const filteredList = listofRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-14">
        {FilteredRestaurant.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            key={restaurant.info.id}
            to={"/restautrants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
