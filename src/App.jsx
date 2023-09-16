import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";

function App() {
  const [cartList,setCartList]= useState([]);

  const handleAddToCart = cart =>{
    const isExist = cartList.find(item => item.course_name==cart.course_name)
    if(isExist){
      return alert("This Course Is Already Selected")
    }

    const newCartList = [...cartList,cart]
    setCartList(newCartList);
    console.log(cartList)
  }
  return (
    <>
      {/* Body */}
      <div className="container mx-auto">
        <Header></Header>
        <div className="grid grid-cols-4 gap-4">
          <div className=" col-span-3">
            <Cards handleAddToCart={handleAddToCart}></Cards>
          </div>

          <div className="flex-1">
            <Cart cartList={cartList}></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
