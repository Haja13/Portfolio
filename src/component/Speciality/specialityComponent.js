import React from "react";
import './SpecialityStyle.css'
import frontEnd01 from  "../../../src/sary/reactJS.png"
import frontEnd02 from  "../../../src/sary/codeigniter.png"
import langage01 from  "../../../src/sary/JS.png"
import langage02 from  "../../../src/sary/PHP.jpg"
import frontEnd03 from  "../../../src/sary/HTML.png"
import frontEnd04 from  "../../../src/sary/CSS.png"
import langage03 from  "../../../src/sary/typescript-1.png"
import dataBase01 from  "../../../src/sary/MySQL.png"
import dataBase02 from  "../../../src/sary/PostgresSQL.png"
import Postman from  "../../../src/sary/postman.png"
import gitkraken from  "../../../src/sary/gitkraken.png"
import backend from  "../../../src/sary/NEST.jpg"
import reactnative from  "../../../src/sary/reactnative.png"

const SpecialityComponent = () => {
    return(
        <div className="speciality" id="section2">
            <div className="trait"> </div>
            <div className="title">
                <p>I'am Specialized in </p>
            </div>
            <div className=" WebDescription">
                {/* <FontAwesomeIcon icon={faLaptopCode} className="icon" /> */}
                <div className="point"></div>

                <p className="descri">Web developpement</p>
            </div>
                {/* <p className="titre-web01" >I'm specialize in javascripte technology </p> */}
                <p className="titre-web02">Front-End </p>

            <div className="block">
                {/* <img src={backend} className="front01" /> */}
                <img src={frontEnd01} className="front01" alt="react_js" />

                <img src={frontEnd02} className="front02" alt="codeIgniter"  />
                <img src={frontEnd03} className="front03" alt="html"  />
                <img src={frontEnd04} className="front04" alt="css"  />
            </div>
                <p  className="titre-web02">Back-End </p>


                <div className="block">
                <img src={backend} className="front01" alt="nest_js" />
                {/* <img src={frontEnd02} className="front02"  />
                <img src={frontEnd03} className="front03"  />
                <img src={frontEnd04} className="front04"  /> */}
            </div>
            <div className="MobileDescription">
                {/* <FontAwesomeIcon icon={faMobile} className="icon" />  */}
                <div className="point"></div>

                <p className="mobile">Mobile  Developpement</p>
            </div>
                {/* <p className="titre-web01">I'm specialize in javascripte technology </p> */}
                <div className="block">
                <img src={reactnative} className="front01" alt="reactnative"   />
                </div>



               
            <div className=" WebDescription">
            <div className="point"></div>

                <p>Programming langage</p>
            </div>
            <div className="block">
                    <img src={langage01} className="front01" alt="javascript" />
                    <img src={langage02}  className="front02" alt="php" />
                    <img src={langage03}  className="front02" alt="typescript" />

            </div>
            <div className="WebDescription">
                <div className="point"></div>

                <p className="">Data Base  </p>
            </div>
                <div className="block">
                    <img src={dataBase01} className="front01"  alt="musql"/>
                    <img src={dataBase02}  className="front02" alt="phpadmin" />
                    {/* <img src={langage03}  className="front02" /> */}

            </div>
            <div className="WebDescription">
                <div className="point"></div>

                <p className="">Others </p>
            </div>
            <div className="block">
                    <img src={Postman} className="front01" alt="postman" />
                    <img src={gitkraken} className="front01" alt="gitkraken"/>
                   

            </div>

        </div>
    )
}
export default SpecialityComponent;