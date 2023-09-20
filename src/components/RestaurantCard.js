const RestaurantCard = (props) => {

    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo} = resData.info;

console.log(props);
    return (
        <div className="res-card">  
        <img className ="res-logo" alt = "res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId }/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4> {resData.info.sla.deliveryTime} minutes</h4>
        <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;