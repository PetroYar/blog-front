import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  let isAuth = true;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        {isAuth && (
          <nav className="nav-bar">
            <ul className="nav-bar__list">
              <li className="nav-bar__item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/"}
                >
                  головна
                </NavLink>
              </li>
              <li className="nav-bar__item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/posts"}
                >
                  пости
                </NavLink>
              </li>
              <li className="nav-bar__item">
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to={"/tasks"}
                >
                  Таски
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        {!isAuth ? <button>вийти</button> : <Link to={"/login"}>ввійти</Link>}
      </div>
    </header>
  );
};

export default Header;
