import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';

function Logo() {
  return (
      <Link
        to="/"
        className="logo"
      >
        <img
          src={headerLogo}
          alt="Логотип проекта"
        />
      </Link>
  )
}

export default Logo;