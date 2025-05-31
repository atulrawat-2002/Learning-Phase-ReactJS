import { useContext } from 'react';
import { CDN_URL } from '../utils/constants'
import UserContext from '../utils/UserContext';

const RestaurantCard = ({resData}) => {
    
    const {loggedIn} = useContext(UserContext);
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info;
    
    return (
        <div className="res-cards m-4 p-3 w-[200px] h-[460px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img className="res-logo rounded-lg " src= {CDN_URL+cloudinaryImageId} alt="res-logo" />
            <h3 className='font-bold py-2 text-lg'>{ name}</h3>
            <h4>{ cuisines.join(", ")}</h4>
            <h4>{ costForTwo}</h4>
            <h4>{ avgRating}</h4>
            <h4>{ sla.slaString} </h4> 
            <h4> User: {loggedIn} </h4>
        </div>
    )
}

export const withPromotedLabel = () => {
    return (props) => {
        return (
            <div>
                <label className='absolute bg-green-300 p-1 m-2 rounded-lg shadow-2xl ' >Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;