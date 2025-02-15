import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="logo"> &copy; Yuri Kuvalja</div>
            </div>

            <div className="footer-middle">
                <div className="social-links">
                    <a href="https://github.com/CRazorIV" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/yuri-kuvalja-25595330b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>

            <div className="footer-right">
                {/* Right column is now empty but maintained for layout */}
            </div>
        </footer>
    );
};

export default Footer;