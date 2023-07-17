import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={Logo} alt="coctail logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
