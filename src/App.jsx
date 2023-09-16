import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'


function App() {
  
  

  return (
    <>
    {/* Body */}
    <div className='container mx-auto'>
     <Header></Header>
     <div className='md:flex flex-row gap-3'>
      <Cards></Cards>
      <Cart></Cart>
     </div>
    </div>
    </>
  )
}

export default App
