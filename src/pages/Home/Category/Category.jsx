
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import TitleSection from '../../../components/TitleSaction/TitleSection';

const Category = () => {
    return (
        <section className='mb-20'>
            <TitleSection
            heading={"Order Online"}
            subHeading={"From 11.00 am to 10.00 pm"}
            ></TitleSection>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-14"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl text-center -mt-20 uppercase text-white' >Salad</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-20 text-white'>Pizza</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-20 text-white'>Soups</h3>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-20 text-white'>Desserts</h3>

                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl text-center uppercase -mt-20 text-white'>Salad</h3>

                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;