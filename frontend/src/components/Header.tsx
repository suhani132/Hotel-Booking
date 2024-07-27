import { Link } from "react-router-dom";

const Header = ()=>{
    return (
        <div className="bg-purple-900 py-6">
            <div className="container mx-auto flex justify-between">
                <span className=" text-3xl text-white font-bold tracking-tight">
                    <Link to="/">MernHolidays.com</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/Sign-in" className="flex items-center bg-white text-purple-900 px-3 font-bold hover:bg-purple-200">
                    Sign In
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default Header;