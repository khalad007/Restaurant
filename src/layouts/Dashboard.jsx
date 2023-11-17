import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-60 min-h-full bg-orange-400">
                <ul className="menu ">
                    <li><NavLink to="/dashboard/userHome" >User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation">Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/cart">My cart</NavLink></li>
                    <li><NavLink to="/dashboard/review">Review</NavLink></li>
                    <li><NavLink to="/dashboard/booking">My Bookings</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;