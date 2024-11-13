import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Sign In");
  const mystyle = {
    textDecoration: "none",
    listStyleType: "none",
    color: "black",
    cursor: "pointer",
  };
  return (
    <div className="flex justify-between shadow-lg sticky">
      <div className="h-50">
        <img className="w-32" src={LOGO_URL}></img>
      </div>
      <div className="flex align-center">
        <ul className="flex p-6 m-5">
          <li className="px-5 text-xl">
            <Link to="/" style={mystyle}>
              Home
            </Link>
          </li>
          <li className="px-5 text-xl">
            <Link to="/about" style={mystyle}>
              About Us
            </Link>
          </li>
          <li className="px-5 text-xl">
            <Link to="/contact" style={mystyle}>
              Contact Us
            </Link>
          </li>
          <li className="px-5 text-xl">
            <Link to="/grocery" style={mystyle}>
              Grocery
            </Link>
          </li>
          <li className="px-5 text-xl">Cart</li>
          <button
            className="flex align-center text-xl"
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
