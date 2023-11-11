import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banPic1 from "../../../assets/home/01.jpg"
import banPic2 from "../../../assets/home/02.jpg"
import banPic3 from "../../../assets/home/03.png"
import banPic4 from "../../../assets/home/04.jpg"
import banPic5 from "../../../assets/home/05.png"
import banPic6 from "../../../assets/home/06.png"

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={banPic1} />
            </div>
            <div>
                <img src={banPic2} />
            </div>
            <div>
                <img src={banPic3} />
            </div>
            <div>
                <img src={banPic4} />
            </div>
            <div>
                <img src={banPic5} />
            </div>
            <div>
                <img src={banPic6} />
            </div>
           
        </Carousel>
    );
};

export default Banner;