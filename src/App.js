import "./styles.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Hotels from "./pages/Hotels"
import SignIn from "./pages/SignIn"
import CityPage from "./pages/CityPage"
import Hotel from "./pages/Hotel"
import AutoToTop from "./components/AutoToTop"
import {Routes, Route} from 'react-router-dom'
import NotFound from "./pages/NotFound"
import SignUpPage from "./pages/SignUpPage"
import NewCity from "./pages/NewCity"
import NewHotel from "./pages/NewHotel"

function App() {
  return (
    <>
    <main className="main">
    <AutoToTop/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/new-city" element={<NewCity/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="hotels/hotel/:hotel" element={<Hotel/>} />
      <Route path="/city/:id" element={<CityPage/>} />
      <Route path="/new-hotel" element={<NewHotel/>} />
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    </main>
    
    </>
  )
}

export default App
