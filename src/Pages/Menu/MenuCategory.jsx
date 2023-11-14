import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {/* {title && <Cover></Cover>} */}
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md: grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center my-10">
                <Link to={`/ourshop/${title}`}>  <button className="btn bg-[#E8E8E8]  hover:bg-black hover:text-white border-b-2 border-b-black text-black">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;