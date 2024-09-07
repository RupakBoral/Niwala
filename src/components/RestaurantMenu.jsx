import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
    // use Params() fetches the resId from the dynamic url, which is the url from the restaurant card
    // console.log("Res id " + resId);
    
    const itemsInfo = useRestaurantMenu( resId );

    if(itemsInfo === null){
        return(
            <Shimmer />
        )
    }

    const name = itemsInfo[0]?.card?.card?.text;

    // const deals = itemsInfo[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    // console.log(deals);

    // const filters = itemsInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card;

    const categories = itemsInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);

    return (
        <div>
            {categories.length === 0 ? (
                <p>No items available</p>
            ) : (
                <div>
                    <h2 className="font-extrabold text-3xl text-orange-400 text-center my-8">{name}</h2>
                    <RestaurantCategory data = {categories} />
                </div>
            )}
        </div>
    )
}

export default RestaurantMenu;