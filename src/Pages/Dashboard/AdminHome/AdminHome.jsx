import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTruck, FaWallet } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { BsFillPeopleFill } from "react-icons/bs";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })


    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pie chart 

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
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

            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar
                            dataKey="quantity"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: "top" }}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="30%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>

                    </PieChart>
                </div>

            </div>
        </div>
    );
};

export default AdminHome;