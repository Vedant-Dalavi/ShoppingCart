import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Removed item from cart");
  };

  return (
    <div className="flex flex-row space-y-2 justify-between items-center w-[550px]">
      <div className="h-[180px]">
        <img src={item.image} alt="" className="h-full w-full" />
      </div>

      <div className="flex flex-col justify-between items-start w-[450px] space-y-5 space-x-10">
        <p></p>
        <p className="font-bold text-xl text-gray-700">{item.title}</p>
        <p className=" text-gray-700">
          {item.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>

        <div className="flex justify-between  items-center w-full">
          <p className="text-green-600 text-xl font-bold">${item.price}</p>

          <button
            onClick={removeFromCart}
            className="flex mr-14  text-xl bg-red-100 text-red-700 items-center hover:bg-red-500 hover:text-white rounded-full h-10 w-10"
          >
            <AiFillDelete className="ml-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
