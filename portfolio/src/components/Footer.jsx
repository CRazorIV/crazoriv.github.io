import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="logo">Your Logo</div>
            </div>

            <div className="footer-middle">
                <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>

            <div className="footer-right">
                {/* Right column is now empty but maintained for layout */}
            </div>
        </footer>
    );
};

export default Footer;