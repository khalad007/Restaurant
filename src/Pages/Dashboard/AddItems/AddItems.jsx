import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <SectionTitle subHeading="ADD AN ITEM" heading="what's new"></SectionTitle>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-5">
                        <label className="label">
                            <span className="label-text font-bold text-base">Recipe Name</span>
                        </label>
                        <input {...register('name', {required: true})} type="text" placeholder="Recipe Name" className="input input-bordered w-full " />

                    </div>

                    <div className="flex gap-5">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold text-base">Category</span>
                            </label>
                            <select {...register('category', {required: true})} className="select select-bordered w-full ">
                                <option disabled selected>Select a category</option>
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
                            <input {...register('price', {required: true})} type="number" placeholder="Price" className="input input-bordered w-full " />

                        </div>
                    </div>
                    <div className="form-control my-3">
                        <label className="label">
                            <span className="label-text font-bold text-base">Recipe Details</span>

                        </label>
                        <textarea {...register('recipe' , {required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                    </div>
                    <div className="my-4">
                        <input {...register('image', {required: true})} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn">Add Item <FaUtensils></FaUtensils> </button> 
                </form>
            </div>
        </div>
    );
};

export default AddItems;