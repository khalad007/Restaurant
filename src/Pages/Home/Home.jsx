import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefService from "./Chef_Service/ChefService";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Category></Category>
            <ChefService></ChefService>
        </div>
    );
};

export default Home;