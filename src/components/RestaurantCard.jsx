import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const{
        name,
        avgRating,
        cuisines, 
        cloudinaryImageId
    } = resData;
    
    const {
        deliveryTime
    } = resData.sla;

    // const header = resData?.aggregated

    let [firstCuisine, secondCuisine] = cuisines
    function truncateName(name) {
        if (name.length > 20) {
            return name.substring(0, 17) + '...';
        }
        return name;
    }
    const shortName = truncateName(name);

    return (
        <div className="relative flex flex-col flex-wrap text-center w-72 h-full rounded-3xl justify-center items-center bg-slate-100 shadow-[0_30px_40px_-10px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-1000">
            <img className="w-72 h-auto rounded-t-3xl rounded-b-sm shadow-lg shadow-inner-bottom" src={IMG_URL+cloudinaryImageId}/>
            <div className="p-2 text-wrap">
                <h3 className="text-lg font-bold text-green-900">{shortName}</h3>
                <p className="text-gray-500 font-semibold text-wrap">{firstCuisine}{(secondCuisine == undefined) ? '' :(', ' + secondCuisine)}</p>
                <p className="font-semibold text-blue-500">{avgRating} ⭐ • {deliveryTime} min</p>
                <div className="absolute bottom-[5.7rem] left-0 w-full from-gray-900 bg-opacity-50 bg-gradient-to-t h-16 bg-blend-darken"></div>
            </div>
        </div>
    )
}

export const withDiscountLabel = (RestaurantCard) => {
    
    return (props) => {
        const {resData} = props;
    
        const header = resData?.aggregatedDiscountInfoV3?.header;
        const subHeader = resData?.aggregatedDiscountInfoV3?.subHeader;

        // console.log(header);

        return(
            <div className="relative hover:scale-105 transition-all duration-1000">
                <RestaurantCard {...props}/>
                <p className="absolute bottom-24 left-1/4 text-amber-300 text-lg font-bold">{header + " " + subHeader}</p>
            </div>
        )
    }
}

export default RestaurantCard;