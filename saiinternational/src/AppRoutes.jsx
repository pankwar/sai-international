import React from "react"
import {Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { LubanaColdChain } from "./pages/LubanaColdChain";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Gallery } from "./pages/Gallery";
import { Products } from "./pages/Products";
import { PriceList } from "./pages/PriceList";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";

export const AppRoutes = () =>{
  const isLoggedIn = window.localStorage.getItem('isLoggedIn');
  return(
    <>
     <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/home" element={<Home/>}> </Route>
        <Route path="/products" element={<Products/>}> </Route>
        <Route path="/about" element={<About/>}> </Route>
        <Route path="/gallery" element={<Gallery/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        <Route path="/team" element={<Team/>}> </Route>
        <Route path="/lubanacoldchain" element={<LubanaColdChain/>}> </Route>
        <Route path="/pricelist" element={<PriceList/>}> </Route>

        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/admin_si_in" element={<Admin/>}> </Route>

     </Routes>
    </>
  )
}