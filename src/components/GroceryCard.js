import { GROCERY_IMG } from "../utils/constants";

const GroceryCard = (props) => {
  const { grocData } = props;

  const { displayName, imageId } = grocData;
  return (
    <div className="grocery-container">
      <div className="grocery-card">
        <div
          className="grocery-card-img-container"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <img
            className="grocery-card-img"
            alt="grocery-img"
            src={GROCERY_IMG + imageId}
          ></img>
        </div>
        <div className="title-div">
          <p className="title">{displayName}</p>
        </div>
      </div>
    </div>
  );
};
export default GroceryCard;
