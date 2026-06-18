import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />}/>
        <Route path="/product/:id" element={<ProductDetails />} /></Route>
    </Routes>
  );
};

export default AppRoutes;