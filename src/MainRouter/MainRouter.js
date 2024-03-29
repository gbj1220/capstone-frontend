import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavoriteRecipes = React.lazy(() =>
  import("../pages/FavoriteRecipes/FavoriteRecipes")
);
const NotAuthHome = React.lazy(() => import("../pages/Home/NotAuthHome"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage/ErrorPage"));
const AuthHome = React.lazy(() => import("../pages/Home/AuthHome"));
const SignUp = React.lazy(() => import("../pages/SignUp/SignUp"));
const Header = React.lazy(() => import("../components/Header/Header"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const Login = React.lazy(() => import("../pages/Login/Login"));
const ErrorPage2 = React.lazy(() => import("../pages/ErrorPage/ErrorPage"));

export default function MainRouter() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route exact path='/favorites' element={<FavoriteRecipes />} />
        <Route exact path='/sign-up' element={<SignUp />} />
        <Route exact path='/error2' element={<ErrorPage2 />} />
        <Route exact path='/guest-search' element={<NotAuthHome />} />
        <Route exact path='/error' element={<ErrorPage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={<AuthHome />} />
        <Route exact path='/' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}
