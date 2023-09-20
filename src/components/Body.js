
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";




const Body = () => {

   const [listOfRestaurants, setListOfRestaurant] = useState([]);

   useEffect(() => {fetchData();}, []);


   const fetchData = async () => {

      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();

     //optional chaining
     setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
    
      
   };

   //conditional rendering

return listOfRestaurants.length === 0 ? <Shimmer /> : (

<div className="body">
<div className="filter">
   <button className ="filter-btn" onClick={() => {
      
      const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4);
      
      setListOfRestaurant(filteredList);
      } }>Top Rated Restaurants</button>
</div>
<div className="res-container">
   { 

listOfRestaurants.map((restaurant) => <RestaurantCard key = {restaurant.info?.id} resData = {restaurant}/>)

   }

</div>

</div>

)

}


export default Body;