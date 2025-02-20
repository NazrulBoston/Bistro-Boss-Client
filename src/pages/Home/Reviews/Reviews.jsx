import { useEffect, useState } from "react";
import TitleSection from "../../../components/TitleSaction/TitleSection";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';


import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'




const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (

        <section>
            <TitleSection
                subHeading={"What Our Client Say"}
                heading={"testimonials"}
            ></TitleSection>
            <div className="mb-16 w-3/4 mx-auto">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="p-20 flex flex-col items-center mx-20">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />

                                <p className="my-4">{review.details}</p>
                                <p className="text-2xl text-yellow-400">{review.name}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </section>
    );
};

export default Reviews;