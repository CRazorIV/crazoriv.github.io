import './Footer.css';
import githubIcon from '../assets/github.svg';  // Add these icons to your assets
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';
import twitterIcon from '../assets/twitter.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-links">
                    <a 
                        href="https://github.com/crazoriv" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <img src={githubIcon} alt="GitHub" className="social-icon" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/yuri-kuvalja-25595330b/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a 
                        href="mailto:yuri.kuvalja@proton.me"
                        aria-label="Email"
                    >
                        <img src={emailIcon} alt="Email" className="social-icon" />
                    </a>
                    <a 
                        href="https://x.com/Yk_civIV"
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Twitter Profile"
                    >
                        <img src={twitterIcon} alt="Twitter" className="social-icon" />
                    </a>
                </div>
                <p className="copyright">© 2024 Yuri Kuvalja. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;