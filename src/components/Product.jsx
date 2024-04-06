import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  };

  return (
    <div
      className="flex flex-col items-center justify-between
    hover:scale-110 transition duration-300 ease-in rounded-lg  gap-3 mt-10 ml-5 outline "
    >
      <div>
        <p className="text-grey-700 font-semibold text-lg truncate w-40 mt-1">
          {post.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>

      <div>
        <p className="w-40 text-grey-400 font-normal text-[10px] text-left ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="" className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5 px-4 pb-2">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <div
            className="text-gray-700 border-2 border-grey-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase

          hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
          >
            <button onClick={removeFromCart}>Remove Item</button>
          </div>
        ) : (
          <div
            className="text-gray-700 border-2 border-grey-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase

          hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
          >
            <button onClick={addToCart}>Add to Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
