import { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantCategory = (props) => {
    const { data } = props;
    // console.log(data);

    // State to track the currently expanded category
    const [showList, setshowList] = useState(0);

    const expandAndHide = (index) => {
        // Toggle the category expansion
        setshowList(showList === index ? null : index);
    };

    return (
        <div>
            {
                data.map((item, index) => (
                    <div key={index} className="mb-6 mx-auto w-2/3">
                        <div onClick={() => expandAndHide(index)} className="cursor-pointer rounded-lg mx-auto flex justify-between bg-gray-50 shadow-lg p-6">
                            <p className="text-2xl font-semibold text-center text-blue-950">
                                {item.card.card.title} ({item.card.card.itemCards.length})
                            </p>
                            <p className="text-2xl">⬇️</p>
                        </div>
                        {
                            // Only expand the category if the index matches
                            showList===index && <RestaurantItem items={item.card.card.itemCards} />
                        }
                    </div>
                )
            )
        }
        </div>
    );
};

export default RestaurantCategory;
