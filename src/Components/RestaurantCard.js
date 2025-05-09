import { CDN_URL } from '../utils/constants'

const RestaurantCard = ({resData}) => {
    
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info;
    
    return (
        <div className="res-cards">
            <img className="res-logo" src= {CDN_URL+cloudinaryImageId} alt="res-logo" />
            <h3>{ name}</h3>
            <h4>{ cuisines.join(", ")}</h4>
            <h4>{ costForTwo}</h4>
            <h4>{ avgRating}</h4>
            <h4>{ sla.slaString} </h4> 
        </div>
    )
}


export default RestaurantCard;