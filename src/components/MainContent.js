import "./MainContent.css";
import Photo from "./Photo";
import Section from "./Section";
import Info from "./Info";
import Footer from "./Footer";

function MainContent() {
    return(
        <div className="MainContentContainer">
            <Photo/>
            <Info/>
            <Section/>
            <Footer/>
        </div>
    )
}

export default MainContent;