import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import { useSelector } from "react-redux";
import { selectItemsCount } from "./features/basketSlice";
import Header from "./Component/Header";


function App() {
  const basketItems = useSelector(selectItemsCount);


  return (
    <>
     <BrowserRouter>
     <Header basketItems={basketItems} />
     <Routes>

       <Route path="/" element={<Home />}/>
       <Route  path="/cart" element={<Cart />}/>
     </Routes>
     
     
     </BrowserRouter>
    </>
  );
}

export default App;
