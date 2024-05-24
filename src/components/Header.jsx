import { useState, useContext } from "react";
import Logo from "../assests/images/logo.jpeg"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => {
    return (
        <a href='/'>
            <img
                className='h-28 p-2'
                alt='Logo-Image'
                src={Logo}
            />
        </a>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // useEffect(() => {
    //     console.log("use effect from Header");
    // }, [isLoggedIn])

    // console.log("render on Header");

    const isOnline = useOnline()

    const { user } = useContext(UserContext)
    const cartItems = useSelector(store => store.cart.items)

    console.log(cartItems);


    return (
        <div className='flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50'>
            <Title />
            <div className='nav-items'>
                <ul className="flex py-10">
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-2"><Link to="/cart">Cart - {cartItems.length} Items</Link></li>

                </ul>
            </div>


            <h1>{isOnline ? "🟢" : "🔴"}</h1>
            <span className="p-10 font-bold text-red-900">{user?.name}</span>
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button> : <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
            }


        </div>
    );
};

export default Header;