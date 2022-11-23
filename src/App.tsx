import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart";
import Home from "./Component/Home";
import { useSelector } from "react-redux";
import { selectItemsCount } from "./features/basketSlice";
import Header from "./Component/Header";
import Todo from "./Component/Todo";


function App() {
  const basketItems = useSelector(selectItemsCount);


  return (
    <>
     <BrowserRouter>
     <Header basketItems={basketItems} />
     <Routes>

       <Route path="/" element={<Home />}/>
       <Route  path="/cart" element={<Cart />}/>
       <Route path="/todo" element={<Todo />} />
       
     </Routes>
     
     
     </BrowserRouter>
    </>
  );
}

export default App;
