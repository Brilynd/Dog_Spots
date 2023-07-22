import ReactPlayer from "react-player"
import Video from "../1105773_1080p_Owner_Affection_1920x1080.mp4"
import "./BackgroundOverlay.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const BackgroundOverlay = () =>{
return(
    <div id="Background_Container">
        <h1 id="video_header">Looking For A Place Like This?</h1>
            <p id="website_directions">Scroll for more info</p>
            <FontAwesomeIcon icon={faArrowDown} id="website_directions_icon"/>
        <div id="background_darken"/>
        <ReactPlayer
        url={Video}
        playing={true}
        muted={true}
        width="100%"
        height="100%"
        loop={true}
        /> 
    </div>
)
}
export default BackgroundOverlay