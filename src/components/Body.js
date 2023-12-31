
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import Button from '@mui/material/Button';



const Body = () => {

   const [listOfRestaurants, setListOfRestaurant] = useState([]);
   const [filteredRestaurant,setFilteredRestaurant] = useState([]);
   const [searchText, setSearchText] = useState("");
   useEffect(() => {fetchData();}, []);

  

   const fetchData = async () => {

      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();

     //optional chaining
     setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
   };


const onlineStatus = useOnlineStatus();

if (onlineStatus === false) return (<h1>Looks like you're offline!! Please check your internet connection</h1>)

   //conditional rendering
 
return listOfRestaurants.length === 0 ? <Shimmer /> : (

<div className="body">
<div className="filter">
   <div className = "search">
      <input type="text" className = "search-box" value = {searchText} onChange = {(e) => { setSearchText(e.target.value)}} /> {/* Wahetver the user types store in searchText */}
      <Button variant="contained" disableElevation onClick = {() => { 

         
//Filter restaurant cards and update UI
const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) );{/* Using listOfRestaurants here is the key, everytime the user searches it searche in the entire db and not filtered db */}
setFilteredRestaurant(filteredRestaurant)


}}
style={{ backgroundColor: 'rgb(250, 109, 53)', color: 'white' }} >Search</Button>
       </div >
       <div className="filter-btn-container">
       <Button variant="contained" className ="filter-btn"  onClick = {() => { 

const filteredList = filteredRestaurant.filter((res) => res.info.avgRating > 4);
     setFilteredRestaurant(filteredList);

}}
style={{ backgroundColor: 'rgb(250, 109, 53)', color: 'white' }} >Top Rated Restaurants
</Button>
</div>
</div>
<div className="res-container">
   { 

filteredRestaurant.map((restaurant) => <Link key = {restaurant.info?.id} to={"/restaurants/" + restaurant.info?.id}><RestaurantCard  resData = {restaurant} test = "hello"/></Link>)

   }

</div>

</div>


)

}


export default Body;