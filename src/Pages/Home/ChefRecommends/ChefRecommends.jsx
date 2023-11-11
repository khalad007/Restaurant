import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import img from '../../../assets/home/Rectangle 5.png'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                heading="---Should Try---"
                subHeading="CHEF RECOMMENDS"
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-semibold text-2xl text-center">Caeser Salad!</h2>
                        <p className="text-center text-base font-normal ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn bg-[#E8E8E8]  hover:bg-black border-b-[#BB8506] text-[#BB8506]">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-semibold text-2xl text-center">Caeser Salad!</h2>
                        <p className="text-center text-base font-normal ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn bg-[#E8E8E8]  hover:bg-black border-b-[#BB8506] text-[#BB8506]">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-semibold text-2xl text-center">Caeser Salad!</h2>
                        <p className="text-center text-base font-normal ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                        <button className="btn bg-[#E8E8E8]  hover:bg-black border-b-[#BB8506] text-[#BB8506]">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;