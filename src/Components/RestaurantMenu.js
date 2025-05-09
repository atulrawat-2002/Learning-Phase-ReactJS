import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    let {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        let data = await fetch(MENU_URL + resId);
        let json = await data.json();
        console.log(json);
        setResInfo(json);
    }


    if (resInfo === null) {
        return <Shimmer />
    }
    const { name, cuisines, costForTwoMessage, labels } = resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    return (
        <div>
            <h1>{name} <sub> <i>Rating</i> </sub></h1>
            <p> {labels[1].message} </p>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id} >
                    {item.card.info.name} -  {"  Rs "} {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </li>)}
            </ul>
        </div>
    )
}


export default RestaurantMenu;