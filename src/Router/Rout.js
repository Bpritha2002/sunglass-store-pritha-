import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { check_token } from "../Redux/authSlice";

// Lazy-loaded Components
const Header = lazy(() => import("../ShareModules/Header/Header"));
const Footer = lazy(() => import("../ShareModules/Footer/Footer"));
const Home = lazy(() => import("../components/Home/Home"));
const About = lazy(() => import("../components/About/About"));
const Categories = lazy(() => import("../components/catagories/Catagories"));
const Service = lazy(() => import("../components/Productss/Productss"));
const ContactUs = lazy(() => import("../components/ContactUs/ContactUs"));
const Registration = lazy(() => import("../components/Register/Register"));
const Profile = lazy(() => import("../components/Profile/Profile"));
const Login = lazy(() => import("../components/Login/Login"));
const AddProduct = lazy(() => import("../Curd/Add/Add"));
const ShowingProduct = lazy(() => import("../Curd/Show/Show"));
const EditProduct = lazy(() => import("../Curd/Edit/Edit"));

function AppRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_token());
  }, [dispatch]);

  function PrivateRoute({ children }) {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    return token ? children : <Navigate to="/signin" />;
  }

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Registration />} />
          <Route path="/signin" element={<Login />} />

          {/* Dynamic Category Route */}
          <Route path="/category/:categoryName" element={<Categories />} />

          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/service" element={<PrivateRoute><Service /></PrivateRoute>} />
          <Route path="/contactus" element={<PrivateRoute><ContactUs /></PrivateRoute>} />
          <Route path="/product" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
          <Route path="/showProduct" element={<PrivateRoute><ShowingProduct /></PrivateRoute>} />
          <Route path="/Edit/:id" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
          <Route path="/profilee" element={<PrivateRoute><Profile /></PrivateRoute>} />

          {/* Fallback Route */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default AppRouter;
