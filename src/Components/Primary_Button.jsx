import "./Primary_Button.css"
const Primary_Button = ({isClicked,Text}) =>{
return(
<button onClick={()=>{isClicked()}} id="Primary_Button_Wrapper">{Text}</button>
)
}
export default Primary_Button;