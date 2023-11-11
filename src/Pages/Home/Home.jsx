import Banner from "./Banner/Banner";
import Category from "./Category/Category";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="text-center my-10">
                <h1 className="text-[#D99904] font-normal my-7 text-sm">---From 11:00am to 10:00pm---</h1>

                <hr className="bg-[#E8E8E8] border-2 w-60 mx-auto" />

                <h1 className="text-4xl font-normal my-7">ORDER ONLINE</h1>
                <hr className="bg-[#E8E8E8] border-2 w-60 mx-auto" />
            </div>
            <Category></Category>
        </div>
    );
};

export default Home;