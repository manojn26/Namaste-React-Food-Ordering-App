import { useEffect } from "react"
import { IMAGE_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const CartItemsCard = ({ restrauntData }) => {

    const dispatch = useDispatch()


    const removeItemHandler = (id) => {
        dispatch(removeItem(id))
    }
    return (
        <div className="flex flex-wrap justify-center">
            {
                restrauntData.map((restraunt) => (
                    <div key={restraunt?.id} className=" w-56 p-2 m-2 shadow-lg bg-pink-50 rounded-md">
                        <img src={`${IMAGE_CDN_URL}/${restraunt?.imageId}`} />
                        {/* <Link to={`restraunt/${restraunt?.info?.id}`}>
                            <h2 className="font-bold text-2xl text-purple-900">{restraunt?.info?.name}</h2>
                        </Link> */}
                        <h1 className="font-bold text-1xl">Name : {restraunt?.name}</h1>
                        <h3>Category : {restraunt?.category}</h3>
                        <h4>Price : {restraunt?.price / 100}</h4>
                        <h4>In Stock : {restraunt?.inStock}</h4>
                        <h4>Rating : {restraunt?.ratings?.aggregatedRating?.rating} </h4>
                        <button className="p-2 m-2 bg-red-500 text-white rounded-md" onClick={() => removeItemHandler(restraunt?.id)}>Remove</button>

                    </div>

                ))
            }
        </div>
    )
}

export default CartItemsCard