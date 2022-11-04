import "./styles.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import Hotels from "./pages/Hotels"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import City from "./pages/City"
import Hotel from "./pages/Hotel"
import NotFound  from "./pages/NotFound"
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <main>
    <Routes>
      <Route path="/index" element={<Home/>}/>
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="city" element={<City/>}/>
      <Route path="hotel" element={<Hotel/>}/>
      <Route path="notfound" element={<NotFound/>}/>
    

    </Routes>
    </main>
    
    </>
  )
}

export default App
