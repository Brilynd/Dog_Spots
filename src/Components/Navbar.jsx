import "./Navbar.css"
import Primary_Button from "./Primary_Button";
const Navbar = ({logginIn,openSignUp,openSignIn}) =>{
    return(
    <div id="navbar-wrapper">
        <div id="navbar-l-container">
            <h1>Dog Spots</h1>
        </div>
            {logginIn?
            <ul id="navbar-r-container">
                <li id="underline_item">HOME</li>
                <li id="underline_item" onClick={()=>openSignIn()}>LOG IN</li>
                <li><Primary_Button Text={"SIGN UP"} isClicked={()=>openSignUp()}/></li>
            </ul>
            :
            <ul id="navbar-r-container">
                <li id="underline_item">HOME</li>
                <li id="underline_item">EXPLORE LOCATIONS</li>
                <li id="underline_item">ADD LOCATIONS</li>
            </ul>
            } 
    </div>
    )
}
export default Navbar;