import React from 'react'
import { useDispatch } from "react-redux";
import { removeItemfrombasket } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { selectItems } from "../features/basketSlice";

function Cart() {
    const basketItems = useSelector(selectItems); 
     const dispatch = useDispatch();

     const removeItems = () => {
        dispatch(removeItemfrombasket([basketItems[0].id ]))

    }

  return (
    <div>
      <div className="p-5">
          <h1 className='text-[30px] text-center bg-orange-300 text-white rounded-lg'>Cart</h1>
      </div>

      <div className='container mx-10  flex justify-between items-center  border-b py-2'>
          <p className='text-center'>Image</p>
          <p className='text-center'>title</p>
          <p className='text-center'>price</p>
          <button>remove</button>
      </div>
      {
          basketItems.map((i:any) => {
              return(
                  <>
                    <div className='container mx-10 flex items-center justify-between border-b py-2'>
          <img src={i.img} alt="" className="w-20" />
          <p className='text-center'>{i.title}</p>
          <p className='text-center'>{i.price}</p>
          <div className='bg-red-400 px-2 h-7 text-white rounded' >     <button onClick={removeItems} >remove items</button></div>

      </div>
                  
                  </>
              )
          })
      }
    
    </div>
  )
}

export default Cart
