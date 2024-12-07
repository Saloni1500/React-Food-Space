import { useEffect, useState } from "react";
import GroceryCard from "./GroceryCard";

const Grocery = () => {
  const [GroceryInfo, setGroceryInfo] = useState([]);
  const [Title, setTitle] = useState([]);
  useEffect(() => {
    fetchGrocery();
  }, []);

  const fetchGrocery = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
    );
    const json = await data.json();
    console.log(json);
    setGroceryInfo(json.data.widgets[1]?.data);
    setTitle(json.data.widgets[1]?.widgetInfo.title);
  };
  return (
    <div className="ml-28 p-6">
      <div>
        <p className="ml-32 my-10 text-4xl font-serif">{Title}</p>
      </div>
      <div className="flex flex-wrap mr-20">
        {GroceryInfo.map((item) => (
          <GroceryCard key={item.nodeId} grocData={item} />
        ))}
      </div>
    </div>
  );
};
export default Grocery;
