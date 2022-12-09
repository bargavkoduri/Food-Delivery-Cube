import Orderpage from "./components/orderpage";
import CartPage from "./components/cartpage"
import HomePage from "./components/home/index"
import React,{ useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export const FoodContext = React.createContext()

function App() {
   const [items, setItems] = useState([]);
   const [count, setCount] = useState(0);
   const [cart, setCart] = useState([]);
   const [show,setShow] = useState(false)
   const con = useRef()
  return (
    <FoodContext.Provider
      value={{ items, setItems, count, setCount, cart, setCart,show,setShow,con }}
    >
      <Router>
        <Routes>
          <Route path="/foods" element={<Orderpage />} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Router>
    </FoodContext.Provider>
  );
}

export default App;