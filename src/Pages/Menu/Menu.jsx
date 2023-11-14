import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'

import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {

    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Cover img={menuImg} title="OUR MENU"></Cover>
            {/* <PopularMenu></PopularMenu> */}
            <SectionTitle subHeading={"TODAY'S OFFER"} heading="---Don't miss---"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            {/* salad */}
            <MenuCategory items={salad} title="salads" img={saladImg}></MenuCategory>
            {/* soup */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;