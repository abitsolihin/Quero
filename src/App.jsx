import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Home from "./Pages/Home"

function App() {

  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <Navbar/>
        <div  className="max-w-[1280px] mx-auto">
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
