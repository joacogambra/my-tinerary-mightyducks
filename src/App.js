import "./styles.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Hotels from "./pages/Hotels"
import SignIn from "./pages/SignIn"
import City from "./pages/City"
import Hotel from "./pages/Hotel"
import AutoToTop from "./components/AutoToTop"
import {Routes, Route} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import SignUpPage from "./pages/SignUpPage"
import NewHotel from "./pages/NewHotel"

function App() {
  return (
    <>
    <main className="main">
    <AutoToTop/>
    <Routes>
      <Route path="/index" element={<Home/>}/>
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/city" element={<City/>}/>
      <Route path="/hotel" element={<Hotel/>}/>
      <Route path="/*" element={<NotFound/>}/>
      <Route path="/new-hotel" element={<NewHotel/>}/>
      <Route path="/:id" element={<Hotel/>} />
  
    </Routes>
    </main>
    
    </>
  )
}

export default App
