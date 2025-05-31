import { useState } from 'react'
import ItemList from "./ItemList";

const RestaurantCatagory = ({ data, showItems, setShowIndex }) => {
    // console.log(data)
    const handleClick = () => {
        setShowIndex();
    }

    return <div className=''>
        {/* header */}
        <div className="bg-green-50 w-6/12 shadow-lg p-4 mx-auto my-2   " >
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg" > {data.title} ({data.itemCards.length})</span>
            <span>🥗</span>
        </div>
                {/* accordian body */}
                { showItems && <ItemList items={ data.itemCards }/> }
        </div>
    </div>

}


export default RestaurantCatagory;