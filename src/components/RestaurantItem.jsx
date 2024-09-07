import { useDispatch } from "react-redux";
import { addItem } from "../redux slice/cartSlice";
import { ITEMS_IMG_URL } from "../utils/constants";

const RestaurantItem = (props) => {
    const { items } = props;
    // console.log(type);

    const dispatch = useDispatch();

    const handleAddItem = (items) => {
        // as add button is clicked, it should dispatch an action
        dispatch(addItem(items));
    }

    return(
        <div>
            {
                items.map((item, index)=>(
                    <li className="flex justify-between mx-auto my-8 items-center border-b-2 border-gray-400 border-opacity-60" key={index}>
                        <div className="bg-gradient-to-r rounded-2xl py-6 flex flex-col min-w-96 max-w-96 gap-2">
                            <h2 className="text-xl font-semibold text-sky-900 cursor-pointer">{item.card.info.name}</h2>
                            <p className="text-green-900 text-lg font-semibold">₹ {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100 || item.card.info.price/100 || "N/A"}</p>
                            <p className="text-green-900 text-lg font-semibold flex items-center">{(item.card.info.ratings.aggregatedRating.rating)  ? item.card.info.ratings.aggregatedRating.rating+ '⭐' : ''}</p>
                            <p className="text-sky-700 font-semibold cursor-pointer">{item.card.info.description}</p>
                        </div>
                        <div className="relative">
                            <img className="w-56 drop-shadow-lg rounded-xl cursor-pointer" src={ ITEMS_IMG_URL + item.card.info.imageId} alt=""/>
                            <button 
                            // we write handler fn inside arrow fn because then it will then be executed only when the button is clicked, otherwise, it will be executed at the time of rendering
                            onClick={() => handleAddItem(item)}
                            className="absolute -bottom-6 left-[30%] p-2 px-6 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 text-center text-green-700 font-bold text-xl">ADD</button>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default RestaurantItem;