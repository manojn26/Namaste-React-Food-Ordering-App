import { useState } from "react";


const Title = () => {
    return (
        <a href='/'>
            <img
                className='logo'
                alt='Logo-Image'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRDkQoLVDDilFi-J1TbbGr5Xf3YCRP3UjKg&s'
            />
        </a>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button> : <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
            }


        </div>
    );
};

export default Header;