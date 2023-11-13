
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItem = data.filter(item => item.category === 'popular');
    //             setMenu(popularItem)
    //         })
    // },[])
    return (
        <section>
            <SectionTitle heading="---Check it out---" subHeading="FROM OUR MENU"></SectionTitle>
            <div className="grid md: grid-cols-2 gap-10 my-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center my-9">
                <button className="btn bg-[#E8E8E8]  hover:bg-black hover:text-white border-b-black text-black">View Full  Menu</button>

            </div>
        </section>
    );
};

export default PopularMenu;