import CallUs from "../CallUs/CallUs";
import Featured from "../Featured/Featured";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import ChefService from "./Chef_Service/ChefService";
import PopularMenu from "./PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
        </div>
    );
};

export default Home;