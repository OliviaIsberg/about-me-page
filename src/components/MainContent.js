import "./MainContent.css";
import Photo from "./Photo";
import Section from "./Section";
import Info from "./Info";

function MainContent() {
    return(
        <div className="MainContentContainer">
            <Photo/>
            <Info/>
            <Section/>
        </div>
    )
}

export default MainContent;