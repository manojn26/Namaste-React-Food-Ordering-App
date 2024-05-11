import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMAGE_CDN_URL } from "../constants"

const RestrauntMenu = () => {
    // const params = useParams()
    // const { id } = params

    // Read dynamic URL from params
    const { id } = useParams()

    const [restrauntData, setRestrauntData] = useState([])
    const [restrauntMenuItems, setRestrauntMenuItems] = useState([])




    useEffect(() => {
        getRestrauntInfo();
    }, [])

    const getRestrauntInfo = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.01420&lng=76.99410&restaurantId=${id}`);
        const jsonData = await data.json()
        console.log(jsonData);

        setRestrauntData(jsonData?.data?.cards[2]?.card?.card?.info)

        console.log("Current Fetching");
        console.log(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards);
        // setRestrauntMenuItems(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0]?.itemCards)

        if (!jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards) {
            setRestrauntMenuItems(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[0]?.itemCards)

        } else {

            setRestrauntMenuItems(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
        }
    }
    // console.log(restrauntData);


    return (
        <div className="menu">
            <h2>Restraunt Id : {id}</h2>
            <h2>{restrauntData?.name}</h2>
            <img src={`${IMAGE_CDN_URL}/${restrauntData?.cloudinaryImageId}`} width={400} height={400} />
            <h2>{restrauntData?.areaName}</h2>
            <h2>{restrauntData?.city}</h2>
            <h2>{restrauntData?.avgRating} Stars</h2>
            <h2>{restrauntData?.costForTwoMessage}</h2>


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