import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign In");
  const mystyle = {
    textDecoration: "none",
    listStyleType: "none",
    color: "black",
    cursor: "pointer",
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg sticky top-0 z-50 bg-white">
      <div className="h-50">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex align-center">
        <ul className="flex p-6 m-5">
          <li className="px-5 text-xl font-poppins py-1">
            <Link to="/" style={mystyle}>
              Home
            </Link>
          </li>
          <li className="px-5 text-xl font-poppins py-1">
            <Link to="/about" style={mystyle}>
              About Us
            </Link>
          </li>
          <li className="px-5 text-xl font-poppins py-1">
            <Link to="/contact" style={mystyle}>
              Contact Us
            </Link>
          </li>
          <li className="px-5 text-xl font-poppins py-1">
            <Link to="/grocery" style={mystyle}>
              Grocery
            </Link>
          </li>
          <li className="px-6 text-xl font-poppins py-1">
            <Link to="/cart" style={mystyle}>
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <button
            className="flex align-center text-xl px-5 font-poppins py-1"
            onClick={() => {
              btnName === "Sign In"
                ? setbtnName("Sign Out")
                : setbtnName("Sign In");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
