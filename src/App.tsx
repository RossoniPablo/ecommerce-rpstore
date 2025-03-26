import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Camisetas from './pages/Camisetas'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camisetas" element={<Camisetas />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
