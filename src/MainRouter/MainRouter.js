import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavoriteRecipes = React.lazy(() =>
  import("../components/FavoriteRecipes/FavoriteRecipes")
);
const NotAuthHome = React.lazy(() => import("../components/Home/NotAuthHome"));
const ErrorPage = React.lazy(() => import("../components/ErrorPage/ErrorPage"));
const AuthHome = React.lazy(() => import("../components/Home/AuthHome"));
const SignUp = React.lazy(() => import("../components/SignUp/SignUp"));
const Header = React.lazy(() => import("../components/Header/Header"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const Login = React.lazy(() => import("../components/Login/Login"));
const ErrorPage2 = React.lazy(() =>
  import("../components/ErrorPage/ErrorPage")
);

const MainRouter = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/favorites' component={FavoriteRecipes} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/error2' component={ErrorPage2} />
        <Route exact path='/guest-search' component={NotAuthHome} />
        <Route exact path='/error' component={ErrorPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/home' component={AuthHome} />
        <Route exact path='/' component={Login} />
      </Switch>
      <Footer />
    </>
  );
};

export default MainRouter();
