import { NavLink, Outlet } from "react-router-dom";

import { FaBook, FaCalendarMinus, FaCartShopping, FaHouse, FaList, FaPaypal, FaRankingStar, FaUser, FaUsers, FaUtensils } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";
const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-60 min-h-full bg-[#D1A054]">
                <ul className="menu ">
                    {
                        isAdmin ? <>
                            <h1 className="font-extrabold text-2xl text-center ">BISTROBOSS <br /><span className="font-bold text-lg">Restaurant</span></h1>
                            <span className="text-center mt-6 font-bold">Admin Options </span>
                            <div className="divider"></div>
                            <li><NavLink to="/dashboard/adminHome" ><FaHouse /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Item's </NavLink></li>
                            <li><NavLink to="/dashboard/manageItem"><FaList></FaList> Manage Item</NavLink></li>
                            <li><NavLink to="/dashboard/bookings"><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/users"><FaUsers /> All User's</NavLink></li>

                            <span className="text-center mt-6 font-bold">User Options</span>
                            <div className="divider"></div>

                            <li><NavLink to="/dashboard/userHome" ><FaHouse /> User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendarMinus /> Reservation</NavLink></li>
                            <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My cart</NavLink></li>
                            <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                            <li><NavLink to="/dashboard/payment"><FaPaypal /> Payment</NavLink></li>
                            <li><NavLink to="/dashboard/booking"><FaBook /> My Bookings</NavLink></li>
                        </>
                            :
                            <>
                                <li><NavLink to="/dashboard/userHome" ><FaHouse /> User Home</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendarMinus /> Reservation</NavLink></li>
                                <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My cart</NavLink></li>
                                <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                                <li><NavLink to="/dashboard/payment"><FaPaypal /> Payment</NavLink></li>
                                <li><NavLink to="/dashboard/booking"><FaBook /> My Bookings</NavLink></li>
                            </>
                    }
                    {/* shared                       */}
                    <div className="divider"></div>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>
            <div className="flex-1 p-11">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;