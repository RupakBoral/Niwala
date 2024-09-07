import { useDispatch, useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import { clearCart } from "../redux slice/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const userName  = useSelector((store) => store.user.userName);
    const deliveryAddress  = useSelector((store) => store.user.deliveryAddress);
    const deliveryTime  = useSelector((store) => store.user.deliveryTime);
    const deliveryType  = useSelector((store) => store.user.deliveryType);
    // console.log(deliveryAddress);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return(
        <div className="flex justify-evenly w-full mx-auto my-20">
            <div className="flex flex-col gap-16 w-1/3">
                <div className="py-3 px-5 bg-gray-200 rounded-xl">
                    <h2 className="font-bold text-xl text-gray-800">Logged in ✅</h2>
                    <p className="font-semibold text-gray-800 text-opacity-85">{userName}</p>
                </div>
                <div className="py-3 px-5 bg-gray-200 rounded-xl">
                    <h2 className="font-bold text-xl text-gray-800">Delivery address ✅</h2>
                    <h3 className="font-semibold text-gray-800 text-opacity-85">{deliveryType}</h3>
                    <p className="font-semibold text-gray-800 text-opacity-85">{deliveryAddress}</p>
                    <p className="font-semibold text-gray-800 text-opacity-85">{deliveryTime}</p>
                </div>
                <button  onClick = {handleClearCart} className="text-xl font-bold text-gray-500 bg-gray-200 p-3 rounded-xl">
                    Clear Cart
                </button>
            </div>
            {
                (cartItems.length === 0) ? <h1>Your Cart is Empty 🛒</h1> : <RestaurantItem items={cartItems} />
            }
        </div>
    )
}

export default Cart;