import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
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
                    text: "Added item success!",
                    icon: "success",
                    timer: 1500,
                    button: "Aww yiss!",
                });
            }
        }
        console.log(res.data)
    }

    return (
        <div>
            <SectionTitle subHeading="ADD AN ITEM" heading="what's new"></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-5">
                        <label className="label">
                            <span className="label-text font-bold text-base">Recipe Name</span>
                        </label>
                        <input {...register('name', { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />

                    </div>

                    <div className="flex gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold text-base">Category</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })} className="select select-bordered w-full ">
                                <option value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>

                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold text-base">Price</span>
                            </label>
                            <input {...register('price', { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text font-bold text-base">Recipe Details</span>

                        </label>
                        <textarea {...register('recipe', { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>
                    <div className="my-4">
                        <input {...register('image', { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn bg-gradient-to-r from-amber-700 to-amber-500 text-white">Add Item <FaUtensils></FaUtensils> </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;