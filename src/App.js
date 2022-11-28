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
import NewShow from "./pages/NewShow"
import MyCitiesPage from "./pages/MyCitiesPage"
import MyItineraryPage from './pages/MyItineraryPage'
import MyShowsPage from './pages/MyShowsPage'
import MyProfile from './pages/MyProfile'
import ProtectedRoute from './components/ProtectedRoute';
import {useSelector, useDispatch} from 'react-redux'
import {  useEffect } from 'react'
import userActions from './redux/actions/userActions'
import EditShow from "./pages/NewShow"
import EditItinerary from "./pages/EditItinerary"
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
      <Route path="/my-cities" element={<ProtectedRoute isAllowed={logged === true} reDirect={"/"} >
      <MyCitiesPage/>
        </ProtectedRoute>}/>
      <Route path="/my-itineraries" element={<ProtectedRoute isAllowed={logged=== true} reDirect={"/"} >
      <MyItineraryPage/>
        </ProtectedRoute>}/>
        <Route path="/my-itineraries/:id" element={<ProtectedRoute isAllowed={logged=== true} reDirect={"/"} >
      <EditItinerary/>
        </ProtectedRoute>}/>
      <Route path="/my-shows" element={<ProtectedRoute isAllowed={logged=== true} reDirect={"/"} >
      <MyShowsPage/>
        </ProtectedRoute>}/>
        <Route path="/my-shows/:id" element={<ProtectedRoute isAllowed={logged=== true} reDirect={"/"} >
      <EditShow/>
        </ProtectedRoute>}/>
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
      <Route path="/new-show" element={<ProtectedRoute isAllowed={logged=== true} reDirect={"/"} >
      <NewShow />
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