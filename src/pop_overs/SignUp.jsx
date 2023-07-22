import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css"
const SignUp = ({close,submit}) =>{
const[password,setPassword] = useState("");
const[confirmPassword,setConfirmPassword] = useState("");
const[email,setEmail] = useState("");
const [err,setErr] = useState("");
const createAccount = () =>{
    if(password == confirmPassword){
        if(email.includes("@")){
            submit(email,password);
        }
        else{
            setErr("Does Not Include @")
        }
    }
    else{
        setErr("Passwords Do Not Match.")
    }
}
return(
    <div className="SignUp_Container">
        <div>
        <FontAwesomeIcon icon={faTimes} id="close_icon"/>
        <h1>Signup</h1>
        <input type="text" placeholder="Email"/>
        <input type="password" name="" id="" placeholder="Password"/>
        <input type="password" name="" id="" placeholder="Confirm Password"/>
        <p>{err}</p>
        <button>Create Account</button>
        <div>
        <p id="SignUp_Regular_Text">Already have an account?</p>
        <a href="">Login</a>
        </div>
        </div>
    </div>
)
}
export default SignUp;