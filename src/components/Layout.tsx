import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Crymbo Oracle</Link>
        <Link to="/crymbo-connect">Crymbo Connect</Link>
        <Link to="#">Documentation</Link>
        <Link to="/developers">Ecosystem</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">Blog</Link>
      </nav>

      <Outlet/>
    </>
  );
}

export default Layout;