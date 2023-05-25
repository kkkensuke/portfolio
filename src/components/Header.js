import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Portfolio</h3>
      </div>
      
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Tech Blog</Link>
          </li>
          {/*コンタクトは一旦保留。うまくいかなかったので。
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;