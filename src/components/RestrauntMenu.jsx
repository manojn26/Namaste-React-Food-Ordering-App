import { useParams } from "react-router-dom"
import { IMAGE_CDN_URL } from "../constants"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const RestrauntMenu = () => {
    // const params = useParams()
    // const { id } = params

    // Read dynamic URL from params
    const { id } = useParams()

    const restrauntData = useRestaurant(id)
    const restrauntMenuItems = useRestaurantMenu(id)

    const dispatch = useDispatch()

    const addFoodItem = (data) => {
        dispatch(addItem(data))
    }

    return !restrauntData ? (
        <Shimmer />
    ) : (
        <div className="flex flex-wrap justify-center gap-20">

            <div>
                <h2>Restraunt Id : {id}</h2>
                <img src={`${IMAGE_CDN_URL}/${restrauntData?.cloudinaryImageId}`} width={400} height={400} />
                <h2>{restrauntData?.name}</h2>
                <h2>{restrauntData?.areaName}</h2>
                <h2>{restrauntData?.city}</h2>
                <h2>{restrauntData?.avgRating} Stars</h2>
                <h2>{restrauntData?.costForTwoMessage}</h2>
            </div>

            {
                !restrauntMenuItems ? <h1>There is No Menu Items</h1> : (
                    <div>
                        <h1>Menu</h1>

                        <ul>
                            {
                                restrauntMenuItems.map((rm) => (
                                    <div key={rm?.card?.info?.id}>
                                        <li>{rm?.card?.info?.name}</li>
                                        <img src={`${IMAGE_CDN_URL}/${rm?.card?.info?.imageId}`} width={100} height={100} style={{ borderRadius: 10 }} />
                                        <button className="p-2 m-2 bg-blue-700 text-white rounded-md" onClick={() => addFoodItem(rm?.card?.info)}>Add Item</button>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                )
            }


        </div>
    )
}

export default RestrauntMenu