
import Products from "./Products";

function Home() {

  return (
   <>
    <div>
      
      </div>
      <div className="grid grid-cols-12 lg:mx-10">
        <div className="lg:col-span-3  md:col-span-6 col-span-6  ">
          <Products
            id="1"
            title="Xiaomi Smart Air Purifier 4 Compact"
            price="Rs.27,499"
            img="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/xiaomismartairpurifier4compact_grande.jpg?v=1666260405"
          />
        </div>
        <div className="lg:col-span-3  md:col-span-6 col-span-6 ">
          <Products
            id="2"
            title="MESH SYSTEM AX3000 (1-PACK)"
            price="Rs.14,999"
            img="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/MESHSYSTEMAX3000_1-PACK_300x.png?v=1663845500"
          />
        </div>
        <div className="lg:col-span-3  md:col-span-6 col-span-6  ">
          <Products
            id="3"
            title="Mi Door and Window Sensor 2 "
            price="Rs.1,999"
            img="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Mi-Door-and-Window-Sensor-2--Product-image_300x.png?v=1653291034"
          />
        </div>
        <div className="lg:col-span-3  md:col-span-6 col-span-6 ">
          <Products
            id="4"
            title="Xiaomi 50W Wireless Charging Stand"
            price="Rs.11,999"
            img="https://cdn.shopify.com/s/files/1/0231/3627/2464/products/50W_300x.jpg?v=1658387680"
          />
        </div>
      </div>
   
   </>
  )
}

export default Home
