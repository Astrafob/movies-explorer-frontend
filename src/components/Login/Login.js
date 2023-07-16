import AuthFrom from "../AuthFrom/AuthFrom";
import apiAuth from '../../utils/AuthApi.js';
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  // const [isSuccess, setIsSuccess] = useState(false);
  // const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const navigate = useNavigate();

  function handleAuthorize(userInfo) {
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
        // setIsSuccess(false);
        // setIsInfoTooltipPopupOpen(true);
        console.log(error)
      })
  }

  return (
    <div className='page__container'>
      <main>
        <AuthFrom
          onSubmit={handleAuthorize}
        />
      </main>
    </div>
  )
}

export default Login;