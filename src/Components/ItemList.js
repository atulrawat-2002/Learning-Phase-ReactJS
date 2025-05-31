import { useDispatch } from "react-redux";
import { addItem } from '../utils/cartSlice'
import { CDN_URL } from "../utils/constants";

const ItemList = ({ addButtonNeed, items }) => {
    const dispatch = useDispatch();
  
    const handleItem = (item) => {
        dispatch(addItem(item));
    }

    return <div>
        {
            items.map((item) => (<div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex" >
                <div className="w-9/12">
                   
                    <div className="py-2">
                        <span className=" py-2 "> {item.card.info.name} </span>
                        <span> ₹{item.card.info.defaultPrice/100 || item.card.info.price / 100} </span>
                    </div>
                    <p className="text-xs ">
                        {item.card.info.isVeg ? <span> 🟢 Veg</span> : <span> 🔴 Non veg</span>}
                    </p>
                </div>
                
                    <div className="w-3/12 p-4 ">
                 {
                    addButtonNeed ? "" : <div className="absolute">
                     <button className=" p-2 mx-16 bg-slate-400 text-white rounded-lg shadow-lg " onClick={() => handleItem(item)} >Add +</button>
                 </div>
                 }
                        { item.card.info.imageId && <img src={CDN_URL + item?.card?.info?.imageId} alt="Image"/>  }
                </div>
                
            </div>))
        }
    </div>
}

export default ItemList;