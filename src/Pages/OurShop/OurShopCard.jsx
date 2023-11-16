import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const OurShopCard = ({ items }) => {
    const { name, image, price, recipe } = items;
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleAddToCart = food => {
        if (user && user.email) {
            // send item to db 
        }
        else {
            swal({
                title: "You are not logged in",
                text: "Please Login to add to the cart..!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                       navigate('/login')
                    }
                });
        }
    }
    return (

        <div className="card my-5 w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-3 top-1 bg-black text-white font-bold rounded-md">$ {price}</p>
            <div className="card-body">
                <h2 className="font-semibold text-2xl text-center">{name}</h2>
                <p className="text-center text-base font-normal ">{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(items)} className="btn bg-[#E8E8E8]  hover:bg-black border-b-2 border-b-[#BB8506] text-[#BB8506]">ADD TO CART</button>
                </div>
            </div>
        </div>

    );
};

export default OurShopCard;