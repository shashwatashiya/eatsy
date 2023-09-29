
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"



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

   //conditional rendering

return listOfRestaurants.length === 0 ? <Shimmer /> : (

<div className="body">
<div className="filter">
   <div className = "search">
      <input type="text" className = "search-box" value = {searchText} onChange = {(e) => { setSearchText(e.target.value)}} /> {/* Wahetver the user types store in searchText */}
      <button onClick = {() => { 

         
         //Filter restaurant cards and update UI
         const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) );{/* Using listOfRestaurants here is the key, everytime the user searches it searche in the entire db and not filtered db */}
         setFilteredRestaurant(filteredRestaurant)
         
         
      }}>Search</button>
       </div>
   <button className ="filter-btn" onClick={() => {
      
      const filteredList = filteredRestaurant.filter((res) => res.info.avgRating > 4);
      setFilteredRestaurant(filteredList);
      
      } }>Top Rated Restaurants</button>
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