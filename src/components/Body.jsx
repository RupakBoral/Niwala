import RestaurantCard, {withDiscountLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react"; // name export
import React from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { restaurant_card } from "../utils/constants";

const Body = () => {

    /*  state variable 
        second parameter is a function which updated ui is pushed
    */
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState([""]);
    
    /* useEffects
        this function will be called after the components have been rendered
        this fn is helpful so that we can first render, then api calls be make and then re-render
        this code will be kept aside, and keep on executing the rest of the code
        after all components rendered, this fn will be called
        
        first Body Components will be printed then Effects
    */
    /*
        UseEffect has 2 argumnets -> callback fn and dependencies array
        if dependencies array is empty then dependencies array is called on initial render(just once)
        if it has loginBtn then it will re-render everytime loginBtn changes
    */
    useEffect (() => {
        // console.log("Effects");
        fetchData();
    }, []) ;
    
    // console.log("Body components");

    async function fetchData(){
        const response =  await fetch(restaurant_card);
        const data = await response.json();
        // console.log(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurant(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // conditional rendering
    // if(listOfRestaurant.length === 0){
    //     return (
    //         <Shimmer/>
    //     )
    // }

    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus === false) return (
        <h1>
            Your internet connection is lost!!
        </h1>
    )

    const LabelRestaurant = withDiscountLabel(RestaurantCard)
    console.log(listOfRestaurant);

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="bg-gradient-to-t from-gray-200 bg-opacity-50 flex flex-col space-y-10 pt-10 overflow-x-hidden">
            <div className="flex w-4/5 mx-auto justify-around gap-4 ">
                <div className="flex gap-4 w-full">
                    <input placeholder="Search for food.." className="w-3/5 border border-gray-800 px-4 py-2 rounded-md" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                    }/>
                    <button className="border-2 bg-opacity-60 text-center border-gray-600 p-2 rounded-3xl" 
                        onClick={()=>{
                            filteredList = listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                        );
                        setfilteredRestaurants(filteredList);
                    }}>
                        <svg className="w-8 p-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 26">
                            <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
                        </svg>
                    </button>
                    <button className="border-2 border-gray-700 px-4 py-2 rounded-xl" onClick={()=>{
                        const filterTopRatedRestaurants = listOfRestaurant.filter((res) => res.info.avgRating >= 4.0);
                        setfilteredRestaurants(filterTopRatedRestaurants);
                    }}
                    >Top Rated</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-16">
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"./restaurant/" +  restaurant.info.id}>
                        {/* if it restaurant card has discount, then show the discount on the card */}    
                        {
                            (restaurant.info.hasOwnProperty("aggregatedDiscountInfoV3")) ? <LabelRestaurant resData = {restaurant.info} /> : <RestaurantCard resData = {restaurant.info} />
                        }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

/*  the Link tag used in a card is used to take to the dynamic url with restaurant Id in it, this Id can be fetched using useParams() from the url 
    this Id is then concatenated to the API url and data is fetched.
    Basically, the restaurant.info.id is the resId which changes according to the restaurant id, 
    this can be used in other components using useParams().
*/

export default Body;