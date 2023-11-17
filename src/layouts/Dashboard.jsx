import { NavLink, Outlet } from "react-router-dom";

import { FaBook, FaCalendarMinus, FaCartShopping, FaHouse, FaPaypal, FaRankingStar } from "react-icons/fa6";
const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-60 min-h-full bg-[#D1A054]">
                <ul className="menu ">
                    <li><NavLink to="/dashboard/userHome" ><FaHouse /> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendarMinus /> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping> My cart</NavLink></li>
                    <li><NavLink to="/dashboard/review"><FaRankingStar /> Review</NavLink></li>
                    <li><NavLink to="/dashboard/payment"><FaPaypal /> Payment</NavLink></li>
                    <li><NavLink to="/dashboard/booking"><FaBook /> My Bookings</NavLink></li>

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