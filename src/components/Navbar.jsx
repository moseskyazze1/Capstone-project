import "./Navbar.css";
import { Link } from "react-router-dom";  

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Fantasy Football</h1>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>  
          <li><Link to="/">About</Link></li>  
          <li><Link to="/contact">Team</Link></li>
          <li><Link to="/draftboard">Draftboard</Link></li>
          <li><Link to="/rankings">Rankings</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
