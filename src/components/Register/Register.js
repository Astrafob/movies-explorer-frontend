import { useState } from "react";
import AuthFrom from "../AuthFrom/AuthFrom";
import { useNavigate } from "react-router-dom";
import apiAuth from '../../utils/AuthApi.js';

function Register({ setLoggedIn }) {
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const navigate = useNavigate();

  function handleRegister(userInfo) {
    apiAuth.register(userInfo)
      .then(() => {
        return apiAuth.authorize(userInfo);
      })
      .then(data => {
        // setIsSuccess(true);
        console.log(data);
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((error) => {
        // setIsSuccess(false);
        console.log(error);
      })
    // .finally(() => {
    //   setIsInfoTooltipPopupOpen(true);
    // })
  }

  return (
    <div className='page__container'>
      <main>
        <AuthFrom
          onSubmit={handleRegister}
        />
      </main>
    </div>
  )
}

export default Register;