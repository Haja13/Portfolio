import React from "react";
import './PersonalStyle.css'
import Sary from "../../../src/sary/profil.JPG"
const PersonalComponent = () =>{
    return(
        <div className="contenue" id="section1">
            <div className="description">
                <div className="trait"></div>
                <div className="paragraphe">
                    <p className="nom">I'm Haja, a Web Developer and Mobile Developer</p>
                    <p className="nom-descri">I'm a student who is passionate about web and mobile development who is curious to learn different technologies</p>
                </div>

            </div>
            <div className="separation">
                <div className="trait2"></div>

            </div>
            <div>
                <img src={Sary} className="sary" alt="village" />
            </div>



        </div>
    )
}
export default PersonalComponent;