import React from "react";

const Footer = ()=>{
    return(<div>
<footer>
            <div className="footer-container">
                <div className="footer-content-container">
                    <h3 className="website-logo">Kicks</h3>
                    <span className="footer-info">3202705314</span>
                    <span className="footer-info">contato@kicks.com</span>
                </div>
                <div className="footer-menus">
                    <div className="footer-content-container">
                    </div>
                    <div className="footer-content-container">
                    </div>
                </div>
                
                <div className="footer-content-container">
                    <span className="menu-title">Siguenos en</span>
                    <div className="social-container">
                        <a href="" className="social-link"></a>
                        <a href="" className="social-link"></a>
                        <a href="" className="social-link"></a>
                    </div>
                </div>
            </div>
            <div className="copyright-container">
                <span className="copyright">Copyright 2023, kicks.com. Todos los derechos reservados.</span>
            </div>
        </footer>

    </div>)
}

export default Footer