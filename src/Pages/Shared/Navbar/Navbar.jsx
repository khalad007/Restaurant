import { Link } from "react-router-dom";
import cart from "../../../assets/icon/cart.png"

const Navbar = () => {

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><a>Contact Us</a></li>
        <li><a>Dashboard</a></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/ourshop/salad">Our Shop<img className="w-10 hover:opacity-5" src={cart} alt="" /></Link></li>
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
               
                    <Link to="login" className="btn">Login</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;