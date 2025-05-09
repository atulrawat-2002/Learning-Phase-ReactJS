import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("")

    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            let json = await data.json();
            setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (err) {
            console.log(err)
        }
    }

    if (listOfRestaurant.length === 0) {
        return (
            <Shimmer />
        )
    }

    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <div className='search' >
                    <input type='text' className='search-box' value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button onClick={() => {

                        let searchedList = listOfRestaurant.filter((res) => {
                            return res.info.cuisines.toString().toLowerCase().includes(searchText.toLowerCase())
                        })

                        setFilteredList(searchedList);
                    }}>
                        Search</button>
                </div>
                <button className='filter-btn' onClick={() => {
                    let topRatedList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.3);
                    setFilteredList(topRatedList)
                }} >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    filteredList.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id} ><RestaurantCard resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
}


export default Body;