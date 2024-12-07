import { GROCERY_IMG } from "../utils/constants";

const GroceryCard = (props) => {
  const { grocData } = props;

  const { displayName, imageId } = grocData;
  return (
    <div className="ml-24 p-5 ">
      <div className="">
        <div className="">
          <img
            className="rounded-full"
            alt="grocery-img"
            src={GROCERY_IMG + imageId}
          ></img>
        </div>
        <div className="">
          <p className="text-center my-3 font-poppins">{displayName}</p>
        </div>
      </div>
    </div>
  );
};
export default GroceryCard;
