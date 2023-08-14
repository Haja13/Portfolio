import React from "react";
import "./contactStyle.css"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn} from "react-icons/fa6";
import { MdAttachEmail,MdContactPhone } from "react-icons/md";
const Contact = () => {
  const  handleClick = () => {
        window.location.href = 'https://github.com/Haja13';
        window.location.href = 'https://www.linkedin.com/in/ajaah-rajerison-220b42272/';
        window.location.href = 'https://mail.google.com/mail/u/0/#inbox';
      };
    return(
        <div className="Contact" id="contact">
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
                <a href= 'https://mail.google.com/mail/u/0/#inbox' style={{marginLeft:10, textDecoration:"none", color:"white"}} onClick={handleClick}>rajerisonkarter98@gmail.com </a> 

                </div>
                <div className="block03">
                <FaGithub size={20}/>
                <p style={{marginLeft:10}}> GitHub :</p>
                <a href= 'https://github.com/Haja13' style={{marginLeft:10, textDecoration:"none", color:"white"}} onClick={handleClick}>Haja13 </a> 
                </div>
                <div className="block04">
                <FaLinkedinIn size={20}/>
                <p style={{marginLeft:10}}> Linkdin :</p>
                <a href= 'https://www.linkedin.com/in/ajaah-rajerison-220b42272/' style={{marginLeft:10, textDecoration:"none", color:"white"}} onClick={handleClick}>Ajaah RAJERISON</a> 

                </div>

            </div>
        </div>
    )
}
export default Contact