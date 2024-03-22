import { FiSearch } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Nav = () => {
    return (
        <div className="flex justify-between items-center my-16">
            <h3 className="text-3xl md:text-4xl font-bold">Healthy Recipes</h3>
            <ul className="hidden lg:flex opacity-70 space-x-6">
                <li><a className=" hover:text-blue-500" href="">Home</a></li>
                <li><a className=" hover:text-blue-500" href="">Recipes</a></li>
                <li><a className=" hover:text-blue-500" href="">About</a></li>
                <li><a className=" hover:text-blue-500" href="">Search</a></li>
            </ul>
            <div className="flex gap-4">
                <div className="px-2 md:px-6 bg-red-50 rounded-[50px] hidden md:flex items-center gap-2">
                    <button className="text-xl"><FiSearch /></button>
                    <input className="bg-red-50 outline-none w-24" type="text" placeholder="Search"/>
                </div>
                <button className="bg-green-500 p-2 md:p-3 rounded-full text-3xl"><FaRegUserCircle /></button>
            </div>
        </div>
    );
};

export default Nav;