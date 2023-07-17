import AuthFrom from "../AuthFrom/AuthFrom";
import apiAuth from '../../utils/AuthApi.js';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ setLoggedIn }) {
  const [disabledInput, setDisabledInput] = useState(false);
  const [errorCatch, setErrorCatch] = useState('');
  const navigate = useNavigate();

  function handleAuthorize(userInfo) {
    setDisabledInput(true);
    apiAuth.authorize(userInfo)
      .then(data => {
        if (data.token) {
          console.log(data);
          localStorage.setItem('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies');
        }
      })
      .catch((error) => {
        setErrorCatch(error);
        console.log(error)
      })
      .finally(() => {
        setDisabledInput(false);
      })
  }

  return (
    <div className='page__container'>
      <main>
        <AuthFrom
          onSubmit={handleAuthorize}
          errorCatch={errorCatch}
          disabledInput={disabledInput}
        />
      </main>
    </div>
  )
}

export default Login;