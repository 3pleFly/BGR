import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { usersActions } from "./Redux/usersSlice";
import './App.css'
import HomeComp from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import FullProfileComp from "./Home/Profile/FullProfile";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AccessibilityPage from "./Pages/AccessibilityPage/AccessibilityPage";
import { useMediaQuery } from 'react-responsive';
import MobileHomeComp from "./Mobile/HomePageMobile/MobileHomeComp";

function App() {

  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <div>


      <Routes>
        <Route path='/' element={isDesktop ? <HomeComp /> : <MobileHomeComp />} />
        <Route path='/profile/:profileId' element={isDesktop ? <FullProfileComp /> : <MobileHomeComp />} />
        <Route path='/contact' element={isDesktop ? <ContactPage /> : <MobileHomeComp />} />
        <Route path='/accessibility' element={isDesktop ? <AccessibilityPage /> : <MobileHomeComp />} />
      </Routes>



    </div>
  )
}

export default App
