import imgLogo from "../assets/svg/logo.svg";
import "../scss/pages/homepage.scss";

function Header() {
  return (
    <header className="max-width-container ">
      <div>
        <img src={imgLogo} />
      </div>
      <div>
        <a>Crymbo Oracle</a>
        <a>Crymbo Connect</a>
        <a>Documentation</a>
        <a>Ecosystem</a>
        <a>Pricing</a>
        <a>Blog</a>
      </div>
      <div>
        <a>
          <div></div>
          <div>
            <img />
          </div>
        </a>
        <button></button>
      </div>
    </header>
  );
}

export default Header;
