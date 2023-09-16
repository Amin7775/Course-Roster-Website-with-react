import { useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartList, setCartList] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);
  const [remaining,setRemaining] = useState(20);

  const handleAddToCart = (cart) => {
    // Check Duplicate
    const isExist = cartList.find(
      (item) => item.course_name == cart.course_name
    );
    // Set Credit Hour
    let creditHourCount = cart.credit;
    // set Total Price
    let priceCount=cart.price;

    if (isExist) {
      return toast("This Course Is Already Selected");
    } else {
      cartList.forEach((item) => {
        creditHourCount = creditHourCount + item.credit;
        priceCount=priceCount+item.price;
      });
      // check remaining hour
      const totalRemaining = 20-creditHourCount;
      if(creditHourCount>20){
        return toast("You can not select more than 20 credits at a time")
      }
      setRemaining(totalRemaining)
      setCreditHour(creditHourCount);
      setTotalPrice(priceCount);
      const newCartList = [...cartList, cart];
      setCartList(newCartList);

   
    }
    <ToastContainer />
  };
  return (
    <>
      {/* Body */}
      <div className="container mx-auto">
        <Header></Header>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
          <div className=" lg:col-span-3">
            <Cards handleAddToCart={handleAddToCart}></Cards>
          </div>

          <div className="order-first lg:order-last p-5 lg:p-0 mx-auto lg:mx-0">
            <Cart cartList={cartList} creditHour={creditHour} totalPrice={totalPrice} remaining={remaining}></Cart>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
