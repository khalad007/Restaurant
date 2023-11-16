import { Link } from "react-router-dom";
import cart from "../../../assets/icon/cart.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        {/* <li><a>Contact Us</a></li> */}
        <li><a>Dashboard</a></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/ourshop/salad">Our Shop</Link></li>
        <button className="btn btn-ghost btn-sm">
            <img className="w-10" src={cart} alt="" />
            <div className="badge badge-secondary">+0</div>
        </button>
        {/* <span>{user?.displayName}</span> */}

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 text-white max-w-screen-xl bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <p className=" normal-case text-xl">BISTRO BOSS <br /> <span className="tracking-widest text-center">Restaurant</span> </p>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal justify-center items-center px-1">
                        {navLinks}
                    </ul>

                    {
                        user ? <Link onClick={handleLogOut} className="btn bg-[#E90000] text-white">Logout</Link> :

                            <Link to="login" className="btn bg-[#06C755] text-white">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;