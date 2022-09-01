import React, { useState } from "react";
import OwnForm from "../Components/OwnForm";

// import { axiosLogin, saveToken } from "../utils/axiosRequest";
import { useNavigate } from "react-router-dom";
function Login() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(false);

  // let navigate = useNavigate();
  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   let loginBody = {
  //     email: e.target[0].value,
  //     password: e.target[1].value,
  //   };

  //   try {
  //     const { data } = await axiosLogin.post("authaccount/login", loginBody);
  //     sessionStorage.setItem("isLogged", JSON.stringify(true));
  //     sessionStorage.setItem("user", JSON.stringify(data.data));
  //     saveToken(data.data.Token);
  //     setIsLoggedIn(true);
  //     setTimeout(() => {
  //       setIsLoggedIn(false);
  //       navigate("/users");
  //     }, 2000);
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //     setErrorMessage(error.message);
  //   }
  // }
  return (
    <div>
      {/* {isLoggedIn && alert("You are successfully logged!")}
      {error && alert("Error!")} */}
      <OwnForm onSubmit={console.log(1)} title="Login" />
    </div>
  );
}

export default Login;
