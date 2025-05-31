import { useParams } from 'react-router-dom';
import Shimmer from "./Shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCatagory from './RestaurantCatagory';
import { useState } from 'react';

const RestaurantMenu = () => {

    const [showiIndex, setShowIndex] = useState(null);
    const settingTheIndex = (index) => {
        if (showiIndex === index) {
            setShowIndex(null)
        } else {
            setShowIndex(index)
        }
    }

    let { resId } = useParams();
    let resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmer />
    }
    const { name, cuisines, costForTwoMessage, labels } = resInfo?.data?.cards[2]?.card?.card?.info;
    let catagories = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(catagories);

    return (
        <div className='text-center' >
            <h1 className='font-bold my-6 text-2xl' >{name} <sub> <i>Rating</i> </sub></h1>
            <p className='font-semibold' > {labels[1].message} </p>
            <h4 className='font-bold text-lg' >{cuisines.join(", ")} - {costForTwoMessage}</h4>
            {
                catagories.map((item, index) => <RestaurantCatagory
                    key={Math.random()}
                    data={item.card.card}
                    showItems={index === showiIndex ? true : false}
                    setShowIndex={() => settingTheIndex(index)}
                />)
            }
        </div>
    )
}

export default RestaurantMenu;