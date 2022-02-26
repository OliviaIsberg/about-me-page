import "./Info.css";
import { FaGithub } from "react-icons/fa";

function Info() {
    return(
        <div className="infoContainer">
            <h1>Olivia Isberg</h1>
            <h3>Study to become a Frontend Developer</h3>
            <button className="gitHub">
                <p><FaGithub/></p>
                <a href="https://github.com/OliviaIsberg">GitHub</a>
            </button>
        </div>
    )
}

export default Info;