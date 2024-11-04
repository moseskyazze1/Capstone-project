import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootball } from '@fortawesome/free-solid-svg-icons'; 

function Footer() {
    return (
        <nav className="footer">
            <div className="footer-container">
                <ul className="footer-links">
                    <li>
                        <a href="/about">
                            <FontAwesomeIcon icon={faFootball} /> Enjoy The Game
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Footer;
