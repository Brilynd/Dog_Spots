import Navbar from "../Components/Navbar"
import BackgroundOverlay from "../Components/BackgroundOverlay";
import ChooseUsItem from "../Components/ChooseUsItem";
import "./Homepage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faMapMarkedAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Galary_Item from "../Components/Galary_Item";
import SignUp from "../pop_overs/SignUp";
import SignIn from "../pop_overs/SignIn";
import DarkenedOverlay from "../Components/DarkenedOverlay";
const Homepage = () =>{
    const [selectedItem,setSelectedItem] = useState(0);
    const [signUpPopup,setSignUpPopup] = useState(false);
    const [signInPopup,setSignInPopup] = useState(false);
    const openSignUp = () =>{
        setSignUpPopup(true);
        document.body.style.overflow = "hidden";
    }
    const closeSignUp = () =>{
        setSignUpPopup(false);
        document.body.style.overflow = "auto";
    }
    const openSignIn = () =>{
        setSignInPopup(true);
        document.body.style.overflow = "hidden";
    }
    const closeSignIn = () =>{
        setSignInPopup(false);
        document.body.style.overflow = "auto";
    }
    const switchToSignIn = () =>{
        setSignUpPopup(false);
        setSignInPopup(true);
    }
    const switchToSignUp = () =>{
        setSignInPopup(false);
        setSignUpPopup(true);
    }
    return(
        <div className="homepage_wrapper" id={signUpPopup&&"locked"}>
            
            <div className="Jumbotron_wrapper">
            <BackgroundOverlay/>
            <Navbar logginIn={true} openSignUp={()=>openSignUp()} openSignIn={()=>openSignIn()}/>
            {signInPopup&&<DarkenedOverlay/>}
            {signUpPopup&&<DarkenedOverlay/>}
         
            {signUpPopup&&<SignUp close={()=>closeSignUp()} switch={()=>switchToSignIn()}/>}
            {signInPopup&&<SignIn close={()=>closeSignIn()} switch={()=>switchToSignUp()}/>}

            
    
            </div>
            <div className="Choose_Us_Container">
                <h1>Why Choose Us?</h1>
                <div className="Choose_Us_Item_Container">
                <ChooseUsItem icon={<FontAwesomeIcon  id="Choose_Us_icon" icon={faMapMarkedAlt}/>} text={"Discover the Best Parks Near You."} header={"Extensive"}/>
                <ChooseUsItem icon={<FontAwesomeIcon id="Choose_Us_icon" icon={faDog}/>} text={"Tailored to Your Dog's Preferences."} header={"Personalized"}/>
                <ChooseUsItem icon={<FontAwesomeIcon id="Choose_Us_icon" icon={faUsers}/>} text={"Join a Thriving Dog Park Community."} header={"Community"}/>
                </div>
            </div>
            <div>
                <h1 id="Galary_Header">Popular Near You</h1>
                <div className="Galary_Container">
                <div className={selectedItem==0?"openItem":"closedItem"} id="itemOne" onClick={()=>setSelectedItem(0)}>
                    <Galary_Item name={"Dog Off Dog Park"} rating={"3"} distance={"13.1"}/>
                </div>
                <div className={selectedItem==1?"openItem":"closedItem"} id="itemTwo" onClick={()=>setSelectedItem(1)}>
                    <Galary_Item name={"Dog Off Dog Park"} rating={"3"} distance={"13.1"}/>
                </div>
                <div className={selectedItem==2?"openItem":"closedItem"} id="itemThree" onClick={()=>setSelectedItem(2)}>
                    <Galary_Item name={"Dog Off Dog Park"} rating={"3"} distance={"13.1"}/>
                </div>
                </div>
                <button id="Galary_CTA_Btn">Login to view more</button>
            </div>
            <div>
                <h1 id="Galary_Header">Our Supporters</h1>
                <div id="sponser_container">
                    <div>
                    <img src="https://www.logo.wine/a/logo/PetSmart/PetSmart-Logo.wine.svg" alt="" />
                    <img src="https://www.nicepng.com/png/full/336-3363698_petco-logo-black-and-white.png" alt="" />
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66391c111404621.60010a098b3c2.png" alt="" />
                    <img src="https://1000logos.net/wp-content/uploads/2021/04/WWF-logo.png" alt="" />
                    <img src="https://1000logos.net/wp-content/uploads/2023/02/ASPCA-logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Homepage;