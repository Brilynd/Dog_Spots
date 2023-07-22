import "./Galary_Item.css"
const Galary_Item = ({name,distance,rating}) =>{
return(
    <div id="Galary_Item_Container">
        <h1>{name}</h1>
        <p>{distance}mi from you</p>
        <p>Rating: {rating}/5</p>
    </div>
)
}

export default Galary_Item;