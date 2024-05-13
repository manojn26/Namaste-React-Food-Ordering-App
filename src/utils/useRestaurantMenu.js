import { useEffect, useState } from "react";
import { FETCH_RESTAURANTS_URL } from "../constants";

const useRestaurantMenu = (id) => {
  const [restrauntMenuItems, setRestrauntMenuItems] = useState(null);

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  const getRestrauntInfo = async () => {
    const data = await fetch(`${FETCH_RESTAURANTS_URL}${id}`);
    const jsonData = await data.json();

    if (
      !jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards
    ) {
      setRestrauntMenuItems(
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
          ?.card?.card?.categories[0]?.itemCards
      );
    } else {
      setRestrauntMenuItems(
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
          ?.card?.card?.itemCards
      );
    }
  };

  return restrauntMenuItems;
};

export default useRestaurantMenu;
