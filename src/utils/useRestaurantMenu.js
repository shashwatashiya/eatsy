import {useEffect, useState} from 'react';

const useRestuarantMenu = (resID) => { 
//fetch data and return res info


const [resInfo, setResInfo] = useState(null);

useEffect(() => {

        fetchData();
}, []); //reason for adding empty dependency array is so that it's onl called once when component renders and not again and again since we won't want it to make a api call again and again

const fetchData = async () => {

     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+ resID +"&catalog_qa=undefined&submitAction=ENTER");

     const json = await data.json();
     
     setResInfo(json.data)
     console.log(json.data);
    
}; 



return resInfo;

};


export default useRestuarantMenu;