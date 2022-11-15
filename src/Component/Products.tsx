import React from "react";
import { useDispatch } from "react-redux";
import { addItemtobasket } from "../features/basketSlice";

interface Props {
  id: string;
  img: string;
  title: string;
  price: string;
}

function Products(props: Props) {
  const dispatch = useDispatch();
  const addItem = () => {
    const Products = {
      id: props.id,
      img: props.img,
      title: props.title,
      price: props.price,
    };

    dispatch(addItemtobasket(Products));
  };

  return (
    <div>
      <div className=" bg-white w-full  mt-5 hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.10)] hover:cursor-pointer">
        <img className="w-[100%]  " src={props.img} alt="" />
        <h3 className="text-center lg:text-[15px] text-[10px]">
          {props.title}
        </h3>
        <p className="text-center text-orange-500 lg:text-[15px] text-[10px]  ">
          {props.price}
        </p>
        <div className="flex justify-center pb-6 py-4">
          <button
            onClick={addItem}
            className="bg-orange-500 px-6 py-2 text-white text-[15px] border-0"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
