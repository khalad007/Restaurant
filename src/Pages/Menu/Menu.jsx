import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
// import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {

    
    return (
        <div>
            <Cover menuImg={menuImg} title="OUR MENU"></Cover>
            {/* <PopularMenu></PopularMenu> */}
           
        </div>
    );
};

export default Menu;