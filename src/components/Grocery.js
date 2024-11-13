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
    <div className="grocery">
      <div>
        <p
          className="title"
          style={{ margin: "50px 0px 0px 80px", fontSize: "35px" }}
        >
          {Title}
        </p>
      </div>
      {GroceryInfo.map((item) => (
        <GroceryCard key={item.nodeId} grocData={item} />
      ))}
    </div>
  );
};
export default Grocery;
