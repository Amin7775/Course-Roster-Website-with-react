import './App.css'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'


function App() {
  
  

  return (
    <>
    {/* Body */}
    <div className='max-w-7xl mx-auto'>
     <Header></Header>
     <div>
      <Cards></Cards>
     </div>
    </div>
    </>
  )
}

export default App
