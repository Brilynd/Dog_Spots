import "./ChooseUsItem.css"
const ChooseUsItem = ({icon,header,text}) =>{
return(
    <div className="choose_us_Item_Container">
        <div className="choose_us_icon_wrapper">
            {icon}
        </div>
        <h1>{header}</h1>
        <p>{text}</p>
    </div>
)
}
export default ChooseUsItem;