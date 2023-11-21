import { FaWallet } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="font-semibold text-3xl">Hi, Welcome Back, <span className="uppercase">{user.displayName}..!</span></h1>

            <div className="grid grid-cols-3">
                <div className="flex justify-center items-center gap-5">
                    <div className="w-11 text-white"><FaWallet></FaWallet></div>
                    <div>
                        <p>204</p>
                        <p>Menu</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-5">
                    <div className="w-11 text-white"><FaWallet></FaWallet></div>
                    <div>
                        <p>204</p>
                        <p>Menu</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-5">
                    <div className="w-11 text-white"><FaWallet></FaWallet></div>
                    <div>
                        <p>204</p>
                        <p>Menu</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;