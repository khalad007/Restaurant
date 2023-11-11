import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"

const Featured = () => {
    return (
        <section>
            <SectionTitle
                subHeading="FEATURED"
                heading="---Check it out---"
            ></SectionTitle>


            <div>
                <div className="hero h-[80vh] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/V3sn69H/featured.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content  ">
                        <img className="w-[500px] " src={featuredImg} alt="" />
                        <div className="w-[500px] text-white">
                            <p className="font-normal text-2xl">March 20, 19999</p>
                            <p  className="font-normal text-2xl mb-7">Where can i get some?</p>
                            <p  className="font-normal text-lg mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <button className="btn btn-ghost  hover:bg-black border-b-white ">Read More</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;