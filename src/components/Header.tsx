import imgLogo from "../assets/svg/logo.svg";
import imgArrow from "../assets/svg/button-arrow.svg";
import imgHamburger from "../assets/svg/hamburger-menu.svg";
import Layout from "./layout";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="max-width-container">
        <div className="header__logo-container">
          <img src={imgLogo} />
        </div>
        <div className="header--navigation">
          <nav>
            <Link to="/">Crymbo Oracle</Link>
            <Link to="/crymbo-connect">Crymbo Connect</Link>
            <Link to="#">Documentation</Link>
            <Link to="/developers">Ecosystem</Link>
            <Link to="#">Pricing</Link>
            <Link to="#">Blog</Link>
          </nav>
        </div>
        <div className="header--buttons-container">
          <a className="header--req-button">
            <div>Request Demo</div>
            <div>
              <img src={imgArrow} className="invert-img" />
            </div>
          </a>
          <button className="header--dropdown-menu-button">
            <img src={imgHamburger} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
