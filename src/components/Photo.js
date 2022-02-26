import image from "../Olivia.jpg";

function Photo() {
    return (
        <img src={image} alt="" style={{width: "250px", height: "250px"}}></img>
    )
}

export default Photo;