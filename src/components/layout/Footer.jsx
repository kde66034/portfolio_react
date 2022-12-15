import React from 'react';

const Footer = ({children}) => {
    return (
        <footer id="footer" className="footer__wrap">
            {children}
        </footer>
    );
}

export default Footer;