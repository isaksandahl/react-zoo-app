import "../styles/Layout.scss";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header-container">
        <div>
          <Link to="/">
            <span>ReactZoo</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/about">Om</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
