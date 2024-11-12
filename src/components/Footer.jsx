import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootball } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <ul className="footer-links">
                    <li>
                        <a href="/about">
                            <FontAwesomeIcon icon={faFootball} /> Enjoy The Game
                        </a>
                    </li>
                    {/* Adding Terms of Service link */}
                    <li>
                        <Link to="/terms" className="terms-link">Terms of Service</Link> {/* React Router Link */}
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
