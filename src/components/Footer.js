import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return(
    <div className="footerContainer">
        <div className="socialsContainer">
            <p><FaGithub/></p>
            <p><FaLinkedinIn/></p>
        </div>
    </div>
    )

}

export default Footer;