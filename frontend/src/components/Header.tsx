import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = ()=>{
    const { isLoggedIn} = useAppContext();

    return (
        <div className="bg-purple-900 py-6">
            <div className="container mx-auto flex justify-between">
                <span className=" text-3xl text-white font-bold tracking-tight">
                    <Link to="/">MernHolidays.com</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? (
                    <>
                    <Link className="flex items-center text-white px-3 font-bold hover:bg-purple-600" to="/my-bookings"> My Bookings</Link>
                    <Link className="flex items-center text-white px-3 font-bold hover:bg-purple-600" to="/my-hotels"> My Hotels</Link>
                    <SignOutButton />
                    </>
                    ):( <Link to="/Sign-in" className="flex items-center text-purple-950 px-3 font-bold bg-white hover:bg-purple-400 hover:text-white">
                    Sign In 
                    </Link>
                    )}
                   
                </span>
            </div>
        </div>
    );
};

export default Header;