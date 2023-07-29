import React from "react";
import './NavBarStyle.css';
import {Link} from 'react-router-dom'
const  NavBarComponent = () => {
    return(
        <div className="contenu">
            <div className="logo">
                <p >Developer </p>
            </div>
            <div className="menu">
                <nav>
                    <a className="link" href="#section1"> Home </a>
                    <a  className="link" href ="#section2"> About </a>
                    <a className="link" href ="#section3"> Contact  </a>
                    <a  className="link" href ="#section4"> Blog </a>

                </nav>
               
            </div>
        </div>
    )
}
export default NavBarComponent;