import React from 'react';
import useCart from '../../../Hooks/useCart';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import { FaTrashCan } from 'react-icons/fa6';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();
    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/carts/${id}`)
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
            <SectionTitle heading="---My Cart---" subHeading="WANNA ADD MORE?"></SectionTitle>
            <div className='flex justify-evenly my-5'>
                <h2 className="6xl">Items: {cart.length}</h2>
                <h2 className="6xl">Total Price: {totalPrice}</h2>
                {cart.length ?
                    <Link to="/dashboard/payment"><button className='btn btn-secondary'>Pay</button></Link>
                :
                <button disabled className='btn btn-secondary'>Pay</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-[#D1A054] text-white'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index}
                                </th>
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
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost text-white bg-red-600"><FaTrashCan></FaTrashCan></button>
                                </th>
                            </tr>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Cart;