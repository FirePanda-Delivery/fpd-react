import React from "react";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CourierInfo from "./pages/CourierInfo";
import PartnersInfo from "./pages/PartnersInfo";
import Contacts from "./pages/Contacts";
import FullRestaurant from "./pages/FullRestaurant";
import './scss/app.scss'

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="courier" element={<CourierInfo/>}/>
                <Route path="partners" element={<PartnersInfo/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="restaurant/:id" element={<FullRestaurant/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App;
