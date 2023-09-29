
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {


    //const [resInfo, setResInfo] = useState(null);

    const {resID} = useParams();

    const resInfo = useRestuarantMenu(resID);
    console.log(resInfo);
    
/* useEffect(() => {

        fetchMenu();
}, []);*/ //reason for adding empty dependency array is so that it's onl called once when component renders and not again and again since we won't want it to make a api call again and again

/* const fetchMenu = async () => {

     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+ resID +"&catalog_qa=undefined&submitAction=ENTER");

     const json = await data.json();
     
     setResInfo(json.data)
     console.log(json.data);
    
}; */

const {name,cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};

const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
console.log(itemCards);
return resInfo === null ? <Shimmer/> :(

<div className="menu">
    <h1>{name}</h1>
    <p>
    {cuisines.join(",")} - {costForTwoMessage}

    </p>
    <h2>Menu</h2>
    
    <ul>
      {itemCards.map((item) => (<li key = {item.card.info.id}>{item.card.info.name} - ₹{(item.card.info.price)/100}</li>))}
    </ul>
</div>


)



}


export default RestaurantMenu