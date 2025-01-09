import React from 'react';
import './Footer.css';
import { useTranslation } from "react-i18next";
import "../i18nconfig"; // Zorg ervoor dat je de configuratie van i18next importeert

const Footer = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Verander de taal
    };

    return (
        <footer className="footer">
            <h2 className='boeler'>&copy; 2025 All rights reserved.</h2>
            <button onClick={() => changeLanguage("nl")} aria-label="Nederlands">
        🇳🇱 {/* Nederlandse vlag */}
      </button>
      <button onClick={() => changeLanguage("en")} aria-label="English">
        🇬🇧 {/* Engelse vlag */}
      </button>
        </footer>
    );
};


export default Footer;