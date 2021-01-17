import { Link } from "gatsby";
import React from "react";

const TopNavBar: React.FC = () => {
  return (
    <div className="c-topNavBar u-yP">
      <aside className="c-topNavBar_group">
        <span>+420 336 775 664</span>
        <span>info@freshnesecom.com</span>
      </aside>
      <nav className="c-topNavBar_group">
        <Link to="/about-us">About us</Link>
        <Link to="/careers">Careers</Link>
      </nav>
    </div>
  );
};

export default TopNavBar;
