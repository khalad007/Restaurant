import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import quoteImg from "../../../assets/quote-left.svg"

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    })
    return (
        <section className="my-9">
            <SectionTitle
                heading="---What Our Clients Say---"
                subHeading="TESTIMONIALS"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col text-center items-center justify-center mx-28 my-7 space-y-5">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <img src={quoteImg} alt="" />
                            <p className="font-normal text-sm">{review.details}</p>
                            <h2 className="text-3xl font-medium text-[#CD9003] ">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;