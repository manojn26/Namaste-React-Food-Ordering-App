import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL } from "../constants";

const useRestaurant = (id) => {
  // Get data from API

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  const getRestrauntInfo = async () => {
    const data = await fetch(`${FETCH_RESTAURANTS_URL}${id}`);
    const jsonData = await data.json();
    console.log(jsonData);

    setRestaurant(jsonData?.data?.cards[2]?.card?.card?.info);
  };

  return restaurant;
};

export default useRestaurant;
