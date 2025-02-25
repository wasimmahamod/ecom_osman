import React, { useState } from 'react';
import {createRoutesFromElements,createBrowserRouter,Route, RouterProvider,} from "react-router-dom";
import Registration from './pages/Registration';
import Login from './pages/Login';
import OtpVarification from './pages/OtpVarification';
import EmailVerification from './pages/EmailVerification';
import Resentverifation from './pages/Resentverifation';
import Forgotpass from './pages/Forgotpass';
import Newpassword from './pages/NewPassword';
import Dashboard from './pages/Dashboard';
import AddCategory from './pages/AddCategory';
import AddSubCategory from './pages/AddSubCategory';
import ViewCategory from './pages/ViewCategory';
import ViewSubCategory from './pages/ViewSubCategory';
import AddProduct from './pages/AddProduct';
import ViewProduct from './pages/ViewProduct';
import FlashSale from './pages/FlashSale';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>

        <Route path="/" element={<Registration/>}/>
        <Route path="/otpvarification/:email" element={<OtpVarification/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/emailverification/:token" element={<EmailVerification/>}/>
        <Route path="/resentverifation/:token" element={<Resentverifation/>}/>
        <Route path="/forgotpass" element={<Forgotpass/>}/>
        <Route path="/newpassword/:token" element={<Newpassword/>}/>

        <Route path="/dashboard" element={<Dashboard />} >

          <Route path="addcategory" element={<AddCategory/>}/>
          <Route path="addsubcategory" element={<AddSubCategory/>}/>
          <Route path="viewcategory" element={<ViewCategory/>}/>
          <Route path="viewSubcategory" element={<ViewSubCategory/>}/>
          <Route path="addproduct" element={<AddProduct/>}/>
          <Route path="viewproduct" element={<ViewProduct/>}/>
          <Route path="flashsale" element={<FlashSale/>}/>

        </Route>

    </Route>   
    
  )
);
function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App;


