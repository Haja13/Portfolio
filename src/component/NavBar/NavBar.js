import React from "react";
import './NavBarStyle.css';
import Logo from "../../../src/sary/logo2.png"

const  NavBarComponent = () => {
    return(
        <div className="contenu">
            <div className="logo">
            <img src={Logo} className="photo" alt="village"/>
            </div>
            <div className="menu">
                <nav>
                    <a className="link" href="#section1"> Home </a>
                    <a  className="link" href ="#section2"> About </a>
                    <a className="link" href ="#contact"> Contact  </a>
                    <a  className="link" href ="#section2"> Blog </a>

                </nav>
               
            </div>
        </div>
    )
}
export default NavBarComponent;