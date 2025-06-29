import "../scss/componenets/header.css";
import imgLogo from "../assets/svg/logo.svg";

function Header() {
  return (
    <header>
      <div>
        <img src={imgLogo} />
      </div>
      <div>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
        <a></a>
      </div>
      <div>
        <a></a>
        <button></button>
      </div>
    </header>
  );
}

export default Header;
