import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import Mybooking from './pages/Mybookings';
import HotelReg from './components/HotelReg';
import Layout from './pages/hotelOwner/Layout';
import Dashboard from './pages/hotelOwner/Dashboard';
import AddRoom from './pages/hotelOwner/AddRoom';
import ListRoom from './pages/hotelOwner/ListRoom';
import RoomDetail from './pages/RoomDetail';
=======
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import AllRooms from './pages/AllRooms.jsx';
import Mybooking from './pages/Mybookings.jsx';
import HotelReg from './components/HotelReg.jsx';
import Layout from './pages/hotelOwner/Layout.jsx';
import Dashboard from './pages/hotelOwner/Dashboard.jsx';
import AddRoom from './pages/hotelOwner/AddRoom.jsx';
import ListRoom from './pages/hotelOwner/ListRoom.jsx';
import RoomDetail from './pages/RoomDetail';
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './conext/AppContext.jsx';
>>>>>>> 347efa5ceca37ddb652258f84cc045b8c1a3b7d9

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showHotelReg} = useAppContext();
  return (
    <div>
      <Toaster/>
     { !isOwnerPath && <Navbar />}
     { showHotelReg  &&  <HotelReg />}
     <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetail/>}/>
          <Route path='/my-bookings' element={<Mybooking/>}/>
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path='/owner' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path="add-room" element={<AddRoom/>}/>
              <Route path="list-room" element={<ListRoom/>}/>

          </Route>
        </Routes>
     </div>
     <Footer/>
    </div>
  )
}

export default App