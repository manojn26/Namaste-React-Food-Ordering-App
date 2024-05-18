import { useState, useEffect, useContext } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

// const restrauntData = [
//     {
//         id: 1,
//         name: "Pizza Hut",
//         image:
//             `${IMAGE_CDN_URL}/2b4f62d606d1b2bfba9ba9e5386fabb7`,
//         cusines: ["Pizzas"],
//         rating: "4.5",
//     },
//     {
//         id: 2,
//         name: "McDonald's",
//         image:
//             `${IMAGE_CDN_URL}/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg`,
//         cusines: ["Burgers", "Beverages"],
//         rating: "4.5",
//     },
//     {
//         id: 3,
//         name: "UBQ by Barbeque Nation",
//         image:
//             `${IMAGE_CDN_URL}/muaktnk5xb3zop4bvj6l`,
//         cusines: ["North Indian",
//             "Barbecue",
//             "Biryani",
//             "Kebabs",
//             "Mughlai",
//             "Desserts"],
//         rating: "4.5",
//     },
//     {
//         id: 4,
//         name: "KFC",
//         image:
//             `${IMAGE_CDN_URL}/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG`,
//         cusines: ["Burgers",
//             "Biryani",
//             "American",
//             "Snacks",
//             "Fast Food"],
//         rating: "4.5",
//     },
//     {
//         id: 5,
//         name: "Domino's Pizza",
//         image:
//             `${IMAGE_CDN_URL}/d0450ce1a6ba19ea60cd724471ed54a8`,
//         cusines: ["Pizzas",
//             "Italian",
//             "Pastas",
//             "Desserts"],
//         rating: "4.5",
//     },
//     {
//         id: 6,
//         name: "Chaat Street Express",
//         image:
//             `${IMAGE_CDN_URL}/aqenclsr4kwkbzomahyx`,
//         cusines: ["Snacks",
//             "Chaat",
//             "Street Food",
//             "Fast Food"],
//         rating: "4.5",
//     },

// ];




const Body = () => {

    // searchText is a local state variable
    const [searchText, setSearchText] = useState(""); //To create state variables
    const [filteredRestraunts, setFilteredRestraunts] = useState([])
    const [allRestraunts, setAllRestraunts] = useState([])

    const { user, setUser } = useContext(UserContext)


    // console.log("Render"); When state variables changes it re-render the entire component

    useEffect(() => {
        // console.log("useEffect");
        getRestraunts()

    }, [])
    // console.log("render");

    const getRestraunts = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        const realAPIData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAllRestraunts(realAPIData)
        setFilteredRestraunts(realAPIData)

        console.log(realAPIData);
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>🔴It seems to be your in Offline please check your internet connection</h1>
    }

    // not render component (Early return)
    if (!allRestraunts) return null;

    // if (filteredRestraunts?.length === 0) return <h1>No Restraunt Match your filter</h1>

    return (allRestraunts.length === 0) ? <Shimmer /> : (
        <>

            <div className="search-container p-5 bg-pink-50 my-5">
                <input type="text" className="focus:bg-green-50 p-2 m-2" placeholder="Search...." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

                <button

                    className="search-button p-2 m-2 bg-green-900 text-white rounded-md" onClick={() => {
                        // need to filter the data
                        // update the data

                        const data = filterData(searchText, allRestraunts)
                        setFilteredRestraunts(data)

                    }}>Search</button>

                <input type="text" value={user?.name} onChange={(e) => setUser({
                    ...user,
                    name: e.target.value,

                })} />

                <input type="text" value={user?.email} onChange={(e) => setUser({
                    ...user,
                    email: e.target.value
                })} />


            </div>

            <div className='restraunt-list flex flex-wrap justify-center bg-purple-400'>
                <RestrauntCard restrauntData={filteredRestraunts} user={user} />
            </div>
        </>
    );
};

export default Body;