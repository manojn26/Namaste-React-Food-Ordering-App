import { useState } from "react";
import Logo from "../assests/images/logo.jpeg"
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
        <a href='/'>
            <img
                className='logo'
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


    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                    <Link to="/instamart"><li>Instamart</li></Link>
                </ul>
            </div>
            <h1>{isOnline ? "🟢" : "🔴"}</h1>
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button> : <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
            }


        </div>
    );
};

export default Header;