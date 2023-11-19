// import SectionTitle from "../Component/SectionTitle/SectionTitle";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaTrashCan, FaUsers } from "react-icons/fa6";
import swal from "sweetalert";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            });
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    swal({
                        title: "Good job!",
                        text: `${user.name} is an Admin now`,
                        icon: "success",
                        button: "Okh..!",
                    });
                }
            })
    }
    const handleDeleteUser = user => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/users/${user._id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount > 0) {
                                refetch();
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div>
            {/* <SectionTitle subHeading={} heading={}></SectionTitle> */}

            <div>
                <h2>All users</h2>
                <h2>Totoal user : {users.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Rule</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? <span className="font-bold">Admin</span> :
                                                <button onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-ghost text-white bg-[#d1a054]"><FaUsers></FaUsers></button>
                                        }

                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost text-white bg-red-600"><FaTrashCan></FaTrashCan></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;