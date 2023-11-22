import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  FaTruck, FaWallet } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats = {}} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    return (
        <div>
            <h1 className="font-semibold text-3xl">Hi, Welcome Back! . {user.displayName}</h1>

            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 my-10">
                {/* revenue */}
                <div className="flex justify-center items-center space-x-4 h-32 lg:w-52 rounded-lg text-white bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div className="lg:text-3xl"><FaWallet></FaWallet></div>
                    <div>
                        <p className="lg:text-3xl font-extrabold">${stats.revenue}</p>
                        <p className="lg:text-xl font-normal">Revenue</p>
                    </div>
                </div>
                {/* user */}
                <div className="flex justify-center items-center space-x-4 h-32 lg:w-52 rounded-lg text-white bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div className="lg:text-3xl"><BsFillPeopleFill /></div>
                    <div>
                        <p className="lg:text-3xl font-extrabold">{stats.users}</p>
                        <p className="lg:text-xl font-normal">Users</p>
                    </div>
                </div>
                {/* Product */}
                <div className="flex justify-center items-center space-x-4 h-32 lg:w-52 rounded-lg text-white bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="lg:text-3xl"><LuChefHat /></div>
                    <div>
                        <p className="lg:text-3xl font-extrabold">{stats.menuItem}</p>
                        <p className="lg:text-xl font-normal">Items</p>
                    </div>
                </div>
                {/* Order */}
                <div className="flex justify-center items-center space-x-4 h-32 lg:w-52 rounded-lg text-white bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div className="lg:text-3xl"><FaTruck></FaTruck></div>
                    <div>
                        <p className="lg:text-3xl font-extrabold">{stats.orders}</p>
                        <p className="lg:text-xl font-normal">Orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;