import "./App.css";
import Cards from "./Components/Cards/Cards";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      {/* Body */}
      <div className="container mx-auto">
        <Header></Header>
        <div className="grid grid-cols-4 gap-4">
          <div className=" col-span-3">
            <Cards></Cards>
          </div>

          <div className="flex-1">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
