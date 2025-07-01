import imgLogo from "../assets/svg/logo.svg";
import imgArrow from "../assets/svg/button-arrow.svg"
import Layout from "./Layout.tsx";

function Header() {
  return (
    <header className="header">
      <div className="max-width-container">
        <div className="header__logo-container">
          <img src={imgLogo} />
        </div>
        <div className="header--navigation">
          <Layout />
        </div>
        <div className="header--buttons-container">
          <a className="header--req-button">
            <div>Request Demo</div>
            <div>
              <img src={imgArrow} className="invert-img"/>
            </div>
          </a>
          <button className="header--dropdown-menu-button"></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
