import { useState } from "react";
import AuthFrom from "../AuthFrom/AuthFrom";
import { useNavigate } from "react-router-dom";
import apiAuth from '../../utils/AuthApi.js';

function Register({ setLoggedIn }) {
  const [disabledInput, setDisabledInput] = useState(false);
  const [errorCatch, setErrorCatch] = useState('');
  const navigate = useNavigate();

  function handleRegister(userInfo) {
    setDisabledInput(true);
    apiAuth.register(userInfo)
      .then(() => {
        return apiAuth.authorize(userInfo);
      })
      .then(data => {
        console.log(data);
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((error) => {
        setErrorCatch(error);
        console.log(error);
      })
      .finally(() => {
        setDisabledInput(false);
      })
  }

  return (
    <div className='page__container'>
      <main>
        <AuthFrom
          onSubmit={handleRegister}
          errorCatch={errorCatch}
          disabledInput={disabledInput}
        />
      </main>
    </div>
  )
}

export default Register;