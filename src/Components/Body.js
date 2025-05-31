import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { withPromotedLabel } from './RestaurantCard';
import UserContext from '../utils/UserContext';

const PromotedRestaurant = withPromotedLabel(RestaurantCard);

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("")
    const {loggedIn, setUserName} = useContext(UserContext);

    useEffect(() => {
            fetchData();
    }, [])

    const fetchData = async () => {

        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let json = await data.json();
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurant(restaurants);
        setFilteredList(restaurants);


    }

    if (useOnlineStatus() === false) {
        return <h1>Looks you're offline!! Please check your internet connection</h1>
    }

    if (listOfRestaurant.length === 0) {
        return (
            <Shimmer />
        )
    }

    return (
        <div className="body">
            <div className="filter flex">
                <div className='search m-4 p-4 ' >
                    <input type='text' className='search-box outline-double outline-black outline-1' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {

                        let searchedList = listOfRestaurant.filter((res) => {
                            return res.info.cuisines.toString().toLowerCase().includes(searchText.toLowerCase())
                        })

                        setFilteredList(searchedList);   
                    }} className='px-2 py-1 mx-2 bg-green-200 rounded-lg'> 
                        Search</button>
                </div>
                <div className=' m-4 p-4 flex items-center'>
                    <button className='filter-btn px-2 py-1 mx-2 bg-gray-100 rounded-lg' onClick={() => {
                    let topRatedList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.3);
                    setFilteredList(topRatedList)
                }} >Top Rated Restaurant</button>
                <div className=''>
                    <label>User: </label>
                    <input className='px-2 border border-black' type='text' value={loggedIn} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                </div>
                
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredList.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} >
                            {
                                restaurant.info.veg ? <PromotedRestaurant resData={restaurant}/> : <RestaurantCard resData={restaurant} />
                            }
                            

                            </Link>
                    ))
                }
            </div>
        </div>
    )
}


export default Body;