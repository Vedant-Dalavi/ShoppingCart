import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/dist";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto bg-slate-900">
        <NavLink to={"/"}>
          {/* <p>asdklknk</p> */}
          {/* <img className="h-14" src="/logo.png" alt="" /> */}
          <img className="h-14" src="../logo.png" alt="" />
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>

          <NavLink to={"/cart"}>
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:text-green-300" />

              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text--xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
