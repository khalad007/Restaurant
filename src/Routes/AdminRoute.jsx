import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = () => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;