import { useEffect, useState } from "react";
import { restaurant_menu } from "../utils/constants";


const useRestaurantMenu = (resId) => {
    const [itemInfo, setitemInfo] = useState(null)

    // fetch data

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const response = await fetch(restaurant_menu + resId)
        const data = await response.json();
        setitemInfo(data?.data?.cards)
    }

    return itemInfo;
}
export default useRestaurantMenu;