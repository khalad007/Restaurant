import { FaPen, FaTrashCan } from "react-icons/fa6";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItem = () => {
    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this food!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    const res = await axiosSecure.delete(`/menu/${item._id}`);
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        swal("Poof! Your Food has been deleted!", {
                            icon: "success",
                        });
                    }
                } else {
                    swal("Your food is safe!");
                }
            });
    }


    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgBB
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // send menu item to the server wiht img 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // send data to the server and then db 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if (menuRes.data.insertedId) {
                //success
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    timer: 1500,
                    button: "Aww yiss!",
                });
            }
        }
        console.log(res.data)
    }

    const handleUpdateItem = item => {

    }

    return (
        <div>
            <SectionTitle subHeading="Manage All Items" heading='---Hurry Up---' ></SectionTitle>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-[#D1A054] text-white">
                            <th>
                                #
                            </th>
                            <th>ITEM IMAGE</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button onClick={() => handleUpdateItem(item)} className="btn btn-ghost bg-[#D1A054] text-white"><FaPen></FaPen></button>

                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost bg-[#B91C1C] text-white"><FaTrashCan></FaTrashCan></button>
                                </td>
                            </tr>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItem;