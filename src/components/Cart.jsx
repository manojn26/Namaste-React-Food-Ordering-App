import { useDispatch, useSelector } from "react-redux"
import store from "../utils/store"
import CartItemsCard from "./CartItemsCard"
import { clearCart } from "../utils/cartSlice"


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch()

    const clearCartHandler = () => {
        dispatch(clearCart())
    }

    // const storeValue = useSelector(store => store)

    return (
        <>
            <h1 className="font-bold text-3xl">Cart Items</h1>
            <button className="p-2 m-2 bg-green-500 text-white rounded-md" onClick={clearCartHandler}>Clear Cart</button>
            <CartItemsCard restrauntData={cartItems} />
        </>
    )
}

export default Cart