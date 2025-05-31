import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const noAddButton = true;
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center p1-10 m-5" >
            <h1 className="font-bold text-2xl" >Cart</h1>
            <div > <button className="bg-slate-400 mx-auto px-4 py-1 rounded-lg" onClick={handleClearCart} > Clear Cart</button> </div>
            <div className="w-6/12 mx-auto" >
                { cartItems.length ? <ItemList addButtonNeed={noAddButton} items={cartItems} />: <h1>Add Items To Cart</h1> }
            </div>
        </div>
    )
}

export default Cart;