import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.png'
import img6 from '../../../assets/home/06.png'

const Banner = () => {

    return (
        <section className="mb-20">
            <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
                <div>
                    <img src={img1} className="banner-img" />

                </div>
                <div>
                    <img src={img2} className="banner-img" />

                </div>
                <div>
                    <img src={img3} className="banner-img" />

                </div>
                <div>
                    <img src={img4} className="banner-img" />

                </div>
                <div>
                    <img src={img5} className="banner-img" />

                </div>
                <div>
                    <img src={img6} className="banner-img" />

                </div>


            </Carousel>
        </section>
    );
};

export default Banner;