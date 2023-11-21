import useAuth from "../../../Hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className="font-semibold text-3xl">Hi, Welcome Back! . {user.displayName}</h1>
        </div>
    );
};

export default AdminHome;