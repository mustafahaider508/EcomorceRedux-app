import React from "react";
import { Link } from "react-router-dom";

interface Props {
  basketItems: number;
}

function Header(props: Props) {
  return (
    <div>
      <div className="bg-orange-400 h-14 flex items-center justify-between px-4">
        <p className=" text-white text-[600] text-[15px] lg:text-xl">
          Redux Store
        </p>
        <input
          className="lg:w-[350px]  w-[300px] h-9 rounded-md px-3 text-[12px]  focus:border-orange-600 focus:ring-orange-600"
          placeholder="search Products"
          type="text"
        />
     <Link to="/cart">
     <p className="text-white lg:text-[20px] text-[15px]">
          cart <span>{props.basketItems}</span>
        </p>
     </Link>
        
      </div>
    </div>
  );
}

export default Header;
