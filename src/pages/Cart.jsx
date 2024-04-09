import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl  mx-auto space-y-10 space-x-5 flex flex-row mt-5">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-between  ml-28 sm:left-0">
            <div className="flex flex-col">
              <div className="uppercase  text-2xl text-green-700 font-semibold">
                Your Cart
              </div>
              <div className="uppercase  text-5xl text-green-700 font-semibold ">
                Summary
              </div>
              <p className="py-5 font-semibold text-gray-700 text-2xl">
                Total Items: {cart.length}
              </p>
            </div>

            <div>
              <p className=" font-semibold text-gray-700 text-2xl">
                Total Amount: ${totalAmount}
              </p>

              <button className="w-full mt-3 items-center text-white text-2xl  h-10 rounded-md pt-5 pb-12 px-36 bg-green-700">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-48 mx-auto">
          <div>
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your Cart is Empty!
            </h1>
            <Link to={"/"}>
              <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
