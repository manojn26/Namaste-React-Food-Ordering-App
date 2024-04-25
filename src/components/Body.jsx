import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { IMAGE_CDN_URL } from "../constants";

const restrauntData = [
    {
        id: 1,
        name: "Pizza Hut",
        image:
            `${IMAGE_CDN_URL}/2b4f62d606d1b2bfba9ba9e5386fabb7`,
        cusines: ["Pizzas"],
        rating: "4.5",
    },
    {
        id: 2,
        name: "McDonald's",
        image:
            `${IMAGE_CDN_URL}/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg`,
        cusines: ["Burgers", "Beverages"],
        rating: "4.5",
    },
    {
        id: 3,
        name: "UBQ by Barbeque Nation",
        image:
            `${IMAGE_CDN_URL}/muaktnk5xb3zop4bvj6l`,
        cusines: ["North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts"],
        rating: "4.5",
    },
    {
        id: 4,
        name: "KFC",
        image:
            `${IMAGE_CDN_URL}/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG`,
        cusines: ["Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"],
        rating: "4.5",
    },
    {
        id: 5,
        name: "Domino's Pizza",
        image:
            `${IMAGE_CDN_URL}/d0450ce1a6ba19ea60cd724471ed54a8`,
        cusines: ["Pizzas",
            "Italian",
            "Pastas",
            "Desserts"],
        rating: "4.5",
    },
    {
        id: 6,
        name: "Chaat Street Express",
        image:
            `${IMAGE_CDN_URL}/aqenclsr4kwkbzomahyx`,
        cusines: ["Snacks",
            "Chaat",
            "Street Food",
            "Fast Food"],
        rating: "4.5",
    },

];



const Body = () => {

    // searchText is a local state variable
    const [searchText, setSearchText] = useState(""); //To create state variables
    const [restraunts, setRestraunts] = useState(restrauntData)

    const filterData = (searchText, restraunts) => {
        console.log(searchText, restraunts);
        const filteredData = restraunts.filter((res) =>
            res.name.toLowerCase().includes(searchText.toLowerCase())
        )
        console.log(filteredData);
        return filteredData
    }

    // console.log("Render"); When state variables changes it re-render the entire component


    return (
        <>

            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search...." value={searchText} onChange={(e) => setSearchText(e.target.value)} />

                <button className="search-button" onClick={() => {
                    // need to filter the data
                    // update the data

                    const data = filterData(searchText, restraunts)
                    setRestraunts(data)

                }}>Search</button>
            </div>

            <div className='restraunt-list'>
                <RestrauntCard restrauntData={restraunts} />
            </div>
        </>
    );
};

export default Body;