import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [0] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <SectionTitle subHeading="Payments History" heading="---At a Glance!---"></SectionTitle>



            <div className="overflow-x-auto">
                <h1 className="text-3xl font-bold my-4">Total Payments : {payments.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white rounded-full">
                        <tr>
                            <th></th>
                            <th>EMAIL</th>
                            <th>PRICE</th>
                            <th>TRANSACTION ID</th>
                            <th>STATUS</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payments.map((items, index) => <tr key={items._id}>
                                <th className="font-medium">{index + 1}</th>
                                <td className="font-medium">{items.email}</td>
                                <td className="font-medium">{items.price}</td>
                                <td className="font-medium">{items.transactionId}</td>
                                <td className="font-medium">{items.status}</td>
                                <td className="font-medium">{new Date(items.date).toLocaleString()}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;