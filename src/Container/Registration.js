import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OwnForm from "../Components/OwnForm";
// import { axiosLogin, saveToken } from "../utils/axiosRequest";

function Registration() {
  // const [isRegistered, setIsRegistered] = useState(false);
  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(false);
  // let navigate = useNavigate();
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target[0]);
  //   let loginBody = {
  //     name: e.target[0].value,
  //     email: e.target[1].value,
  //     password: e.target[2].value,
  //   };

  //   try {
  //     const { data } = await axiosLogin.post(
  //       "authaccount/registration",
  //       loginBody
  //     );
  //     sessionStorage.setItem("isLogged", JSON.stringify(true));
  //     sessionStorage.setItem("user", JSON.stringify(data.data));
  //     saveToken(data.data.Token);

  //     setIsRegistered(true);
  //     setTimeout(() => {
  //       setIsRegistered(false);
  //       navigate("/users");
  //     }, 2000);
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //     setErrorMessage(error.message);
  //   }
  // };
  return (
    <div>
      {/* {isRegistered && (
        <Alert variant="success" color="primary">
          You are successfully registered!
        </Alert>
      )}
      {error && (
        <Alert variant="danger" color="primary">
          {errorMessage}
        </Alert>
      )} */}
      <OwnForm onSubmit={console.log(1)} />
    </div>
  );
}

export default Registration;
