import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4">
      <div className="mb-10 border-b-2 w-6/12 m-auto">
        <div className="flex justify-between items-center">
          <h1 className="font-serif text-3xl">Cart</h1>
          <button
            onClick={handleClearCart}
            className="text-base text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.length == 0 && (
          <div>
            <img
              src="https://adasglobal.com/img/empty-cart.png"
              alt="Empty Cart"
              className="m-auto h-[400px] w-[700px]"
            />
            <h1 className="text-center mt-[-100px] text-lg font-poppins">
              ADD ITEMS TO THE CART
            </h1>
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
