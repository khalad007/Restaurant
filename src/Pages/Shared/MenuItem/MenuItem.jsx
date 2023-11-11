

const MenuItem = ({item}) => {

    const {image, name, recipe, price} = item;

    return (
        <div className="flex space-x-3 ">
            <img  className="w-[75px] h-16" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className="font-normal text-xl">{name}--------------</h3>
                <p className="font-normal text-base">{recipe}</p>
            </div>
            <p className="text-[#BB8506] ">${price}</p>
        </div>
    );
};

export default MenuItem;