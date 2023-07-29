import React from "react";
import "./EducationStyle.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"


const Education = () =>{
    return(
        <div className="education" id="section2">
            <div className="trait"></div>
                <div className="title">
                    <p >Education</p>
                </div>
                        <div className="block">
                            <div className="point"></div>
                            <p className="title01">Institu Superieur Polytechnique de Madagascar </p>
                        </div>
                    <p className="paragraphe01">I am studying at the Polytechnic Higher Institute of Madagascar antsobolo in  computer system electronics and artificial intelligence so far</p>
                <div className="title">
                    <p >Experience </p>
                </div>
                <div className="experience">
                        <div className="block">
                            <div className="point"></div>
                                 <p className="title01" >Fullstack mobile Developer Internaship (STAGE) </p>
                         </div>
                                 <p className="paragraphe01">I am mobile Developer at R@ndev team (web agency) </p>
                                 <p className="paragraphe01"> April 2023 - today </p>
                        <div className="block">
                            <div className="point"></div>
                                 <p className="title01" >Stack : </p>
                         </div>
                                <p className="paragraphe01">REACT NATIVE, GIT & GITHUB, GITKraken </p>
                 </div>
                                
        </div>

    )
}
export default Education;