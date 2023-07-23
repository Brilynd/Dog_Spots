import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SignIn.css"
import Primary_Button from "../Components/Primary_Button";
const SignIn = ({close,submit}) =>{
const[password,setPassword] = useState("");
const[confirmPassword,setConfirmPassword] = useState("");
const[email,setEmail] = useState("");
const [err,setErr] = useState("");
const SignIn = () =>{
    setErr(submit(email,password))
}
return(
    <div className="SignIn_Container">
        <div>
        <FontAwesomeIcon icon={faTimes} id="close_icon" onClick={()=>{close()}}/>
        <h1>Login</h1>
        <input type="text" placeholder="Email"/>
        <input type="password" name="" id="" placeholder="Password"/>
        <p>{err}</p>
        <button>Login</button>
        <div>
        <p id="SignUp_Regular_Text">Don't have an account?</p>
        <a href="">SignUp</a>
        </div>
        </div>
    </div>
)
}
export default SignIn;