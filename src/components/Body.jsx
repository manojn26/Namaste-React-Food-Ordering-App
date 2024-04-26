import { useState, useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";


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

const filterData = (searchText, restaurants) => {

    const filteredData = restaurants.filter((res) => {
        return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return filteredData
}


const Body = () => {

    // searchText is a local state variable
    const [searchText, setSearchText] = useState(""); //To create state variables
    const [filteredRestraunts, setFilteredRestraunts] = useState([])
    const [allRestraunts, setAllRestraunts] = useState([])


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

    // not render component (Early return)
    if (!allRestraunts) return null;

    if (filteredRestraunts?.length === 0) return <h1>No Restraunt Match your filter</h1>

    return (allRestraunts.length === 0) ? <Shimmer /> : (
        <>

            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search...." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

                <button className="search-button" onClick={() => {
                    // need to filter the data
                    // update the data

                    const data = filterData(searchText, allRestraunts)
                    setFilteredRestraunts(data)

                }}>Search</button>
            </div>

            <div className='restraunt-list'>
                <RestrauntCard restrauntData={filteredRestraunts} />
            </div>
        </>
    );
};

export default Body;