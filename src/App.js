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
import MyHotels from "./pages/MyHotels"
import EditHotel from "./pages/EditHotel"
import EditShows from "./pages/EditShows"
import MyCitiesPage from "./pages/MyCitiesPage"
import MyItineraryPage from './pages/MyItineraryPage'
import MyShowsPage from './pages/MyShowsPage'
import MyProfile from './pages/MyProfile'
import ProtectedRoute from './components/ProtectedRoute';
import {useSelector, useDispatch} from 'react-redux'
import {  useEffect } from 'react'
import userActions from './redux/actions/userActions'

function App() {  


  ///login
  let{ keepLog } = userActions
  let { role, logged } = useSelector(state=>state.userReducer)
   const dispatch = useDispatch()


  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))
     if (token) {
      dispatch(keepLog(token.token.user))
   }
    // eslint-disable-next-line
  },[])

  return (
    <>
    <main className="main">
    <AutoToTop/>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/hotels" element={<Hotels/>}/>
      <Route path="/cities" element={<Cities/>}/>
      <Route path="/new-city" element={<ProtectedRoute isAllowed={logged === true && role==="adm"} reDirect={"/"} >
      <NewCity/>
        </ProtectedRoute>}/>
      <Route path="/my-cities" element={<ProtectedRoute isAllowed={logged === true && role==="adm"} reDirect={"/"} >
      <MyCitiesPage/>
        </ProtectedRoute>}/>
      <Route path="/my-itineraries" element={<MyItineraryPage/>}/>
      <Route path="/my-shows" element={<MyShowsPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/hotel/:hotel" element={<Hotel/>} />
      <Route path="/city/:id" element={<CityPage/>} />
      <Route path="/new-hotel" element={<ProtectedRoute isAllowed={logged === true && role==="adm"} reDirect={"/"} >
      <NewHotel/>
        </ProtectedRoute>}/>
      <Route path="/*" element={<NotFound/>}/>
      <Route path="/hotels/admin/" element={<ProtectedRoute isAllowed={logged === true && role==="adm"} reDirect={"/"} >
      <MyHotels/>
        </ProtectedRoute>}/>
      <Route path="/hotels/admin/:id" element={<ProtectedRoute isAllowed={logged === true && role==="adm"} reDirect={"/"} >
      <EditHotel />
        </ProtectedRoute>}/>
      <Route path="/shows/admin/:id" element={<ProtectedRoute isAllowed={logged=== true && role==="adm"} reDirect={"/"} >
      <EditShows />
        </ProtectedRoute>}/>  
        <Route path="/my-profile" element={<ProtectedRoute isAllowed={logged === true} reDirect={"/"} >
      <MyProfile />
        </ProtectedRoute>}/>   
    </Routes>
    </main>
    
    </>
  )
}

export default App