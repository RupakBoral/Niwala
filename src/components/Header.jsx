import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

/*  when a useState is used it re-renders the entire component and the new value is shwown after the process of RECONCILLATION
    when the setloginbtn fn is called it creates a new loginbtn variable with "logout" value
*/


const Header = () => {
    // const doesnot break the law of js because new variable is created during the fn call
    const [loginbtn, setloginbtn] = useState("Login");

    const OnlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(userContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between items-center px-10 shadow-green-300 shadow-md mb-2">
            <div className="bg-transparent">
                <img className="w-28 bg-transparent" src={LOGO_URL}/>
            </div>
            <div className="">
                <ul className="flex gap-4 items-center">
                    <p>Online Status: {OnlineStatus ? '✔️' : '❌'}</p>
                    <ul>
                        <Link to='./'>Home</Link>
                    </ul>
                    <ul>
                        <Link to='./Grocery'>Grocery</Link>
                    </ul>
                    <ul>
                        <Link to='./about'>About Us</Link>
                    </ul>
                    <ul>
                        <Link to="./contact-us">Contact Us</Link>
                    </ul>
                    <ul>
                        <Link to='/cart' className="text-lg font-semibold">🛒 {cartItems.length}</Link>
                    </ul>
                    <ul>
                        {loggedInUser}
                    </ul>
                    <ul>
                        <button onClick={
                            ()=>{
                                if(loginbtn == "Login") setloginbtn("Logout");
                                else setloginbtn("Login")
                                }
                                } className="border-2 border-orange-300 p-2 rounded-md">{loginbtn}</button>
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Header;