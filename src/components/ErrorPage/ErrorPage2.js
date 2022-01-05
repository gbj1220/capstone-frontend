import React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import "./ErrorPage.css";

const ErrorPage2 = () => {
  const navigate = useNavigate();
  return (
    <div className='error-message-non-user-search'>
      <h2>Must be a member to save to favorites. Please sign up or log in.</h2>
      <Button
        variant='contained'
        color='primary'
        onClick={() => navigate("/guest-search")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default ErrorPage2;
