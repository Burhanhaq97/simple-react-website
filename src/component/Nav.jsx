import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Nav = () => {

  const [ show, setShow ] = useState(false)

  return (
    <>
      <nav>
        <div className="logo">
          <h2> kratos </h2>
        </div>
        <div className="nav_links">
          <ul className={ show ? 'show' : '' }>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#service"> service </a>
            </li>
            <li>
              <a href="#about">about us</a>
            </li>
            <li>
              <a href="#product">products</a>
            </li>
            <li>
              <a href="#footer">contact</a>
            </li>
          </ul>
        </div>
        <div className="hamburger_maun" onClick={() => setShow(!show)  }>
            { show ? <ImCross/> :  <FaBars/> }
        </div>
      </nav>
    </>
  );
};

export default Nav;
