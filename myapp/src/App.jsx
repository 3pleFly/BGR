import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { usersActions } from "./Redux/usersSlice";
import './App.css'
import HomeComp from "./Home/Home";
import { Route, Routes } from "react-router-dom";
import FullProfileComp from "./Home/Profile/FullProfile";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AccessibilityPage from "./Pages/AccessibilityPage/AccessibilityPage";

function App() {
  // const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch()

  useEffect(() => {
    // נטען את הנתונים בהתחלת הרכיב
    dispatch(usersActions.load('Avi'));
  }, [dispatch]);

  return (
    <div>
      {/* {users} <br />
      <button onClick={() => { dispatch(usersActions.load(parseInt(Math.random() * 100))) }}>Click me</button> */}

      {/* <HomeComp/> */}

      <Routes>
        {/* Dynamic Routing - Params */}
        <Route path='/' element={<HomeComp />} />
        <Route path='/profile/:profileId' element={<FullProfileComp />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/accessibility' element={<AccessibilityPage />} />
      </Routes>



    </div>
  )
}

export default App
