import { useState } from "react";
import { Link } from "react-router-dom";

const UserHeader = () => {
  let [isNavShow, setIsNavShow] = useState<boolean>(false);
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <span className="navbar-brand ps-2">농산커</span>
      <button className="navbar-toggler" type="button" onClick={() => setIsNavShow(!isNavShow)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              관리자
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todos">
              TodoList
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserHeader;
