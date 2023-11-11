import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItem = data.filter(item => item.category === 'popular');
            setMenu(popularItem)})
    })
    return (
        <section>
            <SectionTitle heading="---Check it out---" subHeading="FROM OUR MENU"></SectionTitle>
            <div className="grid md: grid-cols-2 gap-10 my-10">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;