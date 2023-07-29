import React from "react";
import "./contactStyle.css"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn, FaHome, FaBlogger } from "react-icons/fa6";
import { MdAttachEmail,MdContactPhone } from "react-icons/md";
const Contact = () => {
  const  handleClick = () => {
        window.location.href = 'https://www.youtube.com/';
      };
    return(
        <div className="Contact">
            <p className="title">Contact </p>
            <div className="coordonee">
                {/* <div className="block01">
                <MdAttachEmail size={25}/>
                  <p>Email: </p>
                  <a href= 'https://www.youtube.com/' onClick={handleClick}>adresse-email@example.com </a> }
                </div> */}
                <div className="block02">
                <MdContactPhone size={20}/>
                <p style={{marginLeft:10}}> Contact :</p>
                <p style={{marginLeft:10}}> +261 32 70 162 68 </p>
                </div>

                <div className="bloc">
                <MdAttachEmail size={20}/>
                <p style={{marginLeft:10}}>Email : </p>
                <a href= 'https://www.youtube.com/' style={{marginLeft:10, textDecoration:"none", color:"white"}} onClick={handleClick}>rajjjerisonkarter98@gmail.com </a> 

                </div>
                <div className="block03">
                <FaGithub size={20}/>
                <p style={{marginLeft:10}}> GitHub :</p>
                </div>
                <div className="block04">
                <FaLinkedinIn size={20}/>
                <p style={{marginLeft:10}}> Linkdin :</p>

                </div>

            </div>
        </div>
    )
}
export default Contact